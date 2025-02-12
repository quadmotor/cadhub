import { useAuth } from '@redwoodjs/auth'
import CascadeController from 'src/helpers/cascadeController'
import IdeToolbar from 'src/components/IdeToolbar'
import { useEffect, useState } from 'react'
import { threejsViewport } from 'src/cascade/js/MainPage/CascadeState'
import {
  uploadToCloudinary,
  captureAndSaveViewport,
} from 'src/helpers/cloudinary'

const defaultExampleCode = `// Welcome to Cascade Studio!   Here are some useful functions:
//  Translate(), Rotate(), Scale(), Union(), Difference(), Intersection()
//  Box(), Sphere(), Cylinder(), Cone(), Text3D(), Polygon()
//  Offset(), Extrude(), RotatedExtrude(), Revolve(), Pipe(), Loft(),
//  FilletEdges(), ChamferEdges(),
//  Slider(), Button(), Checkbox()

let holeRadius = Slider("Radius", 30 , 20 , 40);

let sphere     = Sphere(50);
let cylinderZ  =                     Cylinder(holeRadius, 200, true);
let cylinderY  = Rotate([0,1,0], 90, Cylinder(holeRadius, 200, true));
let cylinderX  = Rotate([1,0,0], 90, Cylinder(holeRadius, 200, true));

Translate([0, 0, 50], Difference(sphere, [cylinderX, cylinderY, cylinderZ]));

Translate([-130, 0, 100], Text3D("Start Hacking"));

// Don't forget to push imported or oc-defined shapes into sceneShapes to add them to the workspace!`

const IdeCascadeStudio = ({ part, saveCode, loading }) => {
  const isDraft = !part
  const [code, setCode] = useState(isDraft ? defaultExampleCode : part.code)
  const { currentUser } = useAuth()
  const canEdit = currentUser?.sub === part?.user?.id
  useEffect(() => {
    // Cascade studio attaches "cascade-container" a div outside the react app in 'web/src/index.html', and so we are
    // "opening" and "closing" it for the ide part of the app by displaying none or block. Which is why this useEffect
    // returns a clean up function that hides the div again.
    setCode(part?.code || '')
    const onCodeChange = (code) => setCode(code)
    CascadeController.initialise(onCodeChange, code || '')
    const element = document.getElementById('cascade-container')
    element.setAttribute('style', 'display: block; opacity: 100%; overflow: hidden; height: calc(100vh - 8rem)') // eslint-disable-line
    return () => {
      element.setAttribute('style',  'display: none; overflow: hidden; height: calc(100vh - 8rem)') // eslint-disable-line
    }
  }, [part?.code])
  const isChanges = code !== part?.code

  return (
    <>
      <div>
        <IdeToolbar
          canEdit={canEdit}
          isChanges={isChanges && !loading}
          isDraft={isDraft}
          code={code}
          onSave={async () => {
            const input = {
              code,
              title: part?.title,
              userId: currentUser?.sub,
              description: part?.description,
            }
            const isFork = !canEdit
            if (isFork) {
              const { publicId } = await captureAndSaveViewport()
              input.mainImage = publicId
            }
            saveCode({
              input,
              id: part.id,
              isFork,
            })
          }}
          onExport={(type) => threejsViewport[`saveShape${type}`]()}
          userNamePart={{
            userName: part?.user?.userName,
            partTitle: part?.title,
            image: part?.user?.image,
          }}
          onCapture={async () => {
            const config = {
              currImage: part?.mainImage,
              callback: uploadAndUpdateImage,
              cloudinaryImgURL: '',
              updated: false,
            }
            // Get the canvas image as a Data URL
            config.image = await CascadeController.capture(
              threejsViewport.environment
            )
            config.imageObjectURL = window.URL.createObjectURL(config.image)

            async function uploadAndUpdateImage() {
              // Upload the image to Cloudinary
              const cloudinaryImgURL = await uploadToCloudinary(config.image)

              // Save the screenshot as the mainImage
              saveCode({
                input: {
                  mainImage: cloudinaryImgURL.public_id,
                },
                id: part?.id,
                isFork: !canEdit,
              })

              return cloudinaryImgURL
            }

            // if there isn't a screenshot saved yet, just go ahead and save right away
            if (!part || !part.mainImage) {
              config.cloudinaryImgURL = await uploadAndUpdateImage().public_id
              config.updated = true
            }

            return config
          }}
        />
      </div>
    </>
  )
}

export default IdeCascadeStudio
