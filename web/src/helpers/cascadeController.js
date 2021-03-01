import { initialize } from 'src/cascade/js/MainPage/CascadeMain'
import { monacoEditor } from 'src/cascade/js/MainPage/CascadeState'

class CascadeController {
  _hasInitialised = false
  defaultCode = `// Welcome to Cascade Studio!   Here are some useful functions:
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

  incomingOnCodeChang = () => {}
  controllerOnCodeChange = (code) => {
    this.incomingOnCodeChang(code)
  }

  initialise(onCodeChange, code) {
    const onInit = () => {
      const editor = monacoEditor
      editor.setValue(code)
      editor.evaluateCode(false)
    }
    // only inits on first call, after that it just updates the editor and revaluates code, maybe should rename?
    this.incomingOnCodeChang = onCodeChange
    if (!this._hasInitialised) {
      new initialize(this.controllerOnCodeChange, code, onInit)
      this._hasInitialised = true
      return
    }
    onInit()
  }

  capture(environment, width = 512, height = 384) {
    environment.camera.aspect = width / height;
    environment.camera.updateProjectionMatrix();
    environment.renderer.setSize(width, height);
    environment.renderer.render(environment.scene, environment.camera, null, false);
    let imgBlob = new Promise((resolve, reject) => {
      environment.renderer.domElement.toBlob(
        (blob) => {
          blob.name = `part_capture-${ Date.now() }`
          resolve(blob)
        },
        'image/jpeg',
        1
      );
    })

    // Return to original dimensions
    environment.onWindowResize();

    return imgBlob
  }
}

export default new CascadeController()
