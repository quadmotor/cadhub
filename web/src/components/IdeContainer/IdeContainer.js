import { useEffect, useReducer } from 'react';
import { useAuth } from '@redwoodjs/auth'
import { Responsive, WidthProvider } from 'react-grid-layout';
import Editor from "@monaco-editor/react";
import "../../../../node_modules/react-grid-layout/css/styles.css"
import "../../../../node_modules/react-resizable/css/styles.css"
import CascadeController from 'src/helpers/cascadeController'
import { IdeReducer } from 'src/helpers/hooks/IdeReducer'
import IdeToolbar from 'src/components/IdeToolbar'

const cadPackageConfigs = {
  'cascade': CascadeController,
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const IdeContainer = ({ part, saveCode, loading }) => {
  const initialState = {
    currCadPackage: cadPackageConfigs['cascade'],
    currCode: cadPackageConfigs['cascade'].defaultCode,
  }
  const [state, dispatch] = useReducer(IdeReducer, initialState)
  const layouts = generateLayouts()
  const { currentUser } = useAuth()
  const isDraft = !part
  const canEdit = currentUser?.sub === part?.user?.id
  useEffect(() => {
    dispatch({ type: 'SET_CODE', payload: part?.code || state.currCode })
    // const onCodeChange = (code) => setCode(code)
    // CascadeController.initialise(onCodeChange, code || '')
    // const element = document.getElementById('cascade-container')
    // element.setAttribute('style', 'display: block; opacity: 100%; overflow: hidden; height: calc(100vh - 8rem)') // eslint-disable-line
    return () => {
      // element.setAttribute('style',  'display: none; overflow: hidden; height: calc(100vh - 8rem)') // eslint-disable-line
    }
  }, [part?.code])
  const isChanges = state.currCode !== part?.code

  return (<>
    <IdeToolbar
      canEdit={canEdit}
      isChanges={isChanges && !loading}
      isDraft={isDraft}
      code={state.currCode}
      onSave={async () => {
        const input = {
          code: state.currCode,
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
    <ResponsiveGridLayout
      className="cadhub-editor bg-gray-900"
      layouts={layouts}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
      <div key="editor">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={ state.currCode }
          width="auto"
          theme="vs-dark"
          onChange={(value, e) => dispatch({ type: 'SET_CODE', payload: value })}/>
      </div>
      <div key="viewer" className="bg-yellow-500">b</div>
      <div key="console" className="bg-purple-500 console" style={{overflow: 'auto'}}>
        {/* This currently just spits out the code to show something going on here, but it should spit out whatever messages the CAD package returns */}
        <pre>{ state.currCode }</pre>
      </div>
    </ResponsiveGridLayout>
  </>)
}

export default IdeContainer


function generateLayouts() {
  return {
    lg: [
      {i: 'editor', x: 0, y: 0, w: 6, h: 4 },
      {i: 'viewer', x: 6, y: 0, w: 6, h: 3 },
      {i: 'console', x: 6, y: 3, w: 6, h: 1 }
    ],
    md: [
      {i: 'editor', x: 0, y: 0, w: 5, h: 4 },
      {i: 'viewer', x: 5, y: 0, w: 5, h: 3 },
      {i: 'console', x: 5, y: 3, w: 5, h: 1},
    ],
    sm: [
      {i: 'editor', x: 0, y: 0, w: 3, h: 4 },
      {i: 'viewer', x: 3, y: 0, w: 3, h: 3 },
      {i: 'console', x: 3, y: 3, w: 3, h: 1 },
    ],
    xs: [
      {i: 'editor', x: 0, y: 0, w: 4, h: 2 },
      {i: 'viewer', x: 0, y: 2, w: 4, h: 2 },
      {i: 'console', x: 0, y: 4, w: 4, h: 1 },
    ],
    xxs: [
      {i: 'editor', x: 0, y: 0, w: 2, h: 2 },
      {i: 'viewer', x: 0, y: 0, w: 2, h: 2 },
      {i: 'console', x: 0, y: 4, w: 2, h: 1 },
    ],
  }
}