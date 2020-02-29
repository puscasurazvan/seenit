import React from 'react'
import { mount } from 'enzyme'
import VideoModal from './VideoModal'

const minProps = {
  open: false,
  toggle: jest.fn(),
}

describe('VideoModal', () => {
  it('should render with the right props', () => {
    const wrapper = mount(<VideoModal {...minProps} />)
    expect(wrapper.props().open).toBe(false)
  })

  it('should render a close button when is opened', () => {
    minProps.open = true
    const wrapper = mount(<VideoModal {...minProps} />)
    expect(wrapper.props().open).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('should render without exploding', () => {
    const wrapper = mount(<VideoModal {...minProps} />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
