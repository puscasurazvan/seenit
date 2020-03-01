import React from 'react'
import { mount } from 'enzyme'
import EmbeddedVideo from './EmbeddedVideo'

const minProps = {
  video: { title: 'Video Title', src: 'www.url.com' },
}

describe('EmbeddedVideo', () => {
  it('should render with the right props', () => {
    const wrapper = mount(<EmbeddedVideo {...minProps} />)
    expect(wrapper.find('iframe').length).toEqual(1)
    expect(wrapper.props().video).toEqual({
      title: 'Video Title',
      src: 'www.url.com',
    })
    expect(wrapper.find('EmbeddedVideo').length).toEqual(1)
  })

  it('should render without exploding', () => {
    const wrapper = mount(<EmbeddedVideo {...minProps} />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
