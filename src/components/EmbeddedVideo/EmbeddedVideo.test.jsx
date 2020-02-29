import React from 'react'
import { mount } from 'enzyme'
import EmbeddedVideo from './EmbeddedVideo'

const minProps = {
  video: { title: 'Video Title', src: 'www.url.com' },
}

describe('EmbeddedVideo', () => {
  it('Matches the snapshot', () => {
    const wrapper = mount(<EmbeddedVideo {...minProps} />)
    expect(wrapper.find('iframe').length).toEqual(1)
    expect(wrapper.find('EmbeddedVideo').length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
