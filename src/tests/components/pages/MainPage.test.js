import React from 'react'
import axios from 'axios'
import { mount } from 'enzyme'
import MainPage from '../../../components/pages/Main'

jest.mock(axios)

axios.get.mockReturnValue()

beforeEach(() => {
  const wrapper = mount(<MainPage />)
})

it('should render fine', () => {
  expect(wrapper).toMatchSnapshot()
})

it("should render fine after opening a movie's score", () => {
  wrapper.find(DisplayMovieScoreButton).simulate('click')
  expect(wrapper).toMatchSnapshot()
})

it('should simulate a click on MovieScoreButton and show the correct average score', () => {
    wrapper.find(DisplayMovieScoreButton).simulate('click')
    const movieScoreButton = wrapper.find(MovieScoreButton)
    movieScoreButton.simulate('click')
    const score = movieScoreButton.find(span).value
    expect(score).toBe()
})
