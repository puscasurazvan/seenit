import React from 'react'
import { mount } from 'enzyme'
import Wrapper from './Wrapper'

describe('Wrapper', () => {
  it('should render with a Heading', () => {
    const wrapper = mount(<Wrapper />)
    expect(wrapper.find('Heading').length).toEqual(1)
  })

  it('should render a VideoModal when Heading is clicked', () => {
    const wrapper = mount(<Wrapper />)
    const heading = wrapper.find('h3')
    heading.simulate('click')
    expect(wrapper.find('VideoModal').length).toEqual(1)
  })

  it('should render without exploding', () => {
    const wrapper = mount(<Wrapper />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
