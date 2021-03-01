import { Responsive, WidthProvider } from 'react-grid-layout';
import Editor from "@monaco-editor/react";
import "../../../../node_modules/react-grid-layout/css/styles.css"
import "../../../../node_modules/react-resizable/css/styles.css"
import CascadeController from 'src/helpers/cascadeController'
import { useState } from 'react';

const cadPackageConfigs = {
  'cascade': CascadeController,
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const IdeContainer = () => {
  const [currCadPackage, setCadPackage] = useState('cascade')
  const layouts = generateLayouts()

  return (<>
    <ResponsiveGridLayout
      className="cadhub-editor bg-gray-900"
      layouts={layouts}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
      <div key="editor">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={ cadPackageConfigs[currCadPackage].defaultCode } />
      </div>
      <div key="viewer" className="bg-yellow-500">b</div>
      <div key="console" className="bg-purple-500">c</div>
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