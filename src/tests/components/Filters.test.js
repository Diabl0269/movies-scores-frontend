import React from 'react'
import Filters from '../../components/filters/Filters'
import { mount } from 'enzyme'
import { Select } from '@material-ui/core'
import Name from '../../components/filters/form/fields/Name'
import Main from '../../components/pages/Main'

describe('simulating a query type change', () => {
  const pageWrapper = mount(<Main />)
  const wrapper = pageWrapper.find(Filters)

  it('should match snapshot before change', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should be able to find Name field component', () => {
    const select = wrapper.find(Select)
    select.simulate('change', { target: { value: 'name' } })
    wrapper.update()
    expect(pageWrapper.find(Name).exists).toBeTruthy()
  })
})
