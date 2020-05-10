const { AuthUserProvider } = require('../../context/AuthUserProvider')
import React from 'react'
import axios from 'axios'
import { shallow } from 'enzyme'

jest.mock('axios')

let wrapper
beforeEach(() => {
  require('../scripts/createLocalStorage')
  wrapper = shallow(<AuthUserProvider />)
})

describe('this is a context for checking auth and getting the user', () => {
  it('should render a loader while getting a user', () => {
    localStorage.setItem('token', 'mockToken')
    const wrapper = shallow(<AuthUserProvider />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  xit('should sign up user successfully', async () => {
    const resObject = { data: 1 }
    axios.post.mockReturnValue(resObject)
    const res = wrapper.find('AuthUserProvider').simulate('addUser')
    expect(res).toEqual(resObject)
  })

  xit('should return an object with status 400', async () => {
    const resObject = { status: 400 }
    axios.post.mockReturnValue(resObject)
    const res = await wrapper.addUser()
    expect(res).toEqual(resObject)
  })

  xit('should return an object with status 409', async () => {
    const resObject = { status: 409 }
    axios.post.mockReturnValue(resObject)
    const res = await wrapper.addUser()
    expect(res).toEqual(resObject)
  })
})
