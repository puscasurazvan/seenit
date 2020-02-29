import React from 'react'
import { mount } from 'enzyme'
import VideoWrapper from './VideoWrapper'

describe('VideoWrapper', () => {
  it('should render with a Heading', () => {
    const wrapper = mount(<VideoWrapper />)
    expect(wrapper.find('Heading').length).toEqual(1)
  })

  it('should render a VideoModal when Heading is clicked', () => {
    const wrapper = mount(<VideoWrapper />)
    const heading = wrapper.find('h3')
    heading.simulate('click')
    expect(wrapper.find('VideoModal').length).toEqual(1)
  })

  it('Matches the snapshot', () => {
    const wrapper = mount(<VideoWrapper />)
    expect(wrapper).toMatchSnapshot()
  })
})
