import React from 'react'
import NotFoundPage from '../../../components/pages/NotFound'
import { mount } from 'enzyme'
import { A } from 'hookrouter'

const wrapper = mount(<NotFoundPage />)

it('should render fine', () => {
  expect(wrapper).toMatchSnapshot()
})

it('should change url to "/"', () => {
  const url = global.window.location.toString() + '*'
  global.window.location = new URL(url)

  wrapper.find(A).simulate('click')

  const {
    window: {
      location: { pathname }
    }
  } = global

  expect(pathname).toBe('/')
})
