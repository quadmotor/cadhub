import { Link, routes } from '@redwoodjs/router'
import OutBound from 'src/components/OutBound'

const Footer = () => {
  return (
    <div className="bg-indigo-900 text-indigo-200 font-roboto mt-20 text-sm">
      <div className="flex h-16 justify-end items-center mx-16">
        <OutBound
          className="mr-8"
          to="https://github.com/Irev-Dev/cadhub/discussions/212"
        >
          Road Map
        </OutBound>
        <Link className="mr-8" to={routes.codeOfConduct()}>
          Code of Conduct
        </Link>
        <Link to={routes.privacyPolicy()}>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
