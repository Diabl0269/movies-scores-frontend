import React from 'react'
import { mount, shallow } from 'enzyme'
import { IconButton } from '@material-ui/core'
import Page from '../../../components/pages/Page'
import SideBar from '../../../components/base/SideBar'

it('should match snapshot', () => {
  const wrapper = shallow(<Page />)
  expect(wrapper.debug()).toMatchSnapshot()
})

it('should match snapshot with open sidebar', () => {
  const wrapper = mount(<Page />)
  wrapper.find(IconButton).at(0).simulate('click')
  expect(wrapper.find(SideBar).exists()).toBeTruthy()
})
