import React from 'react'
import { mount } from 'enzyme'
import Heading from './Heading'

const minProps = {
  headingText: 'Hello world',
}

describe('Heading', () => {
  it('should render with the right props', () => {
    const wrapper = mount(<Heading {...minProps} />)
    expect(wrapper.props().headingText).toEqual('Hello world')
  })
  it('should render without exploding', () => {
    const wrapper = mount(<Heading {...minProps} />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
