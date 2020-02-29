import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
  it('Matches the snapshot', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
