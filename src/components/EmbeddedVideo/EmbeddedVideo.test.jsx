import React from 'react'
import { mount } from 'enzyme'
import EmbeddedVideo from './EmbeddedVideo'

describe('EmbeddedVideo', () => {
  it('Matches the snapshot', () => {
    const props = {
      headingText: 'Heading text',
      video: { title: 'Video Title', src: 'www.url.com' }
    }
    const wrapper = mount(<EmbeddedVideo {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
