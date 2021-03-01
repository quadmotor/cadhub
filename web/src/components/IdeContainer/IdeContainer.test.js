import { render } from '@redwoodjs/testing'

import IdeContainer from './IdeContainer'

describe('IdeContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IdeContainer />)
    }).not.toThrow()
  })
})
