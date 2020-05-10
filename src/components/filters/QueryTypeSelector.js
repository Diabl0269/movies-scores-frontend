import React from 'react'
import { Container } from '@material-ui/core'
import d from '../../data/dictionary'
import { Select, MenuItem, Typography } from '@material-ui/core'
import queryDefaults from '../../data/queryDefaults.json'
import { useMovies } from '../../context/MoviesProvider'

export default () => {
  const keys = Object.keys(queryDefaults)
  const { type, changeQueryType } = useMovies()

  const handleChange = (e) => {
    changeQueryType(e.target.value)
  }

  return (
    <Container id="queryTypeSelectorContainer">
      <Typography id="queryTypeSelectorText">{d('searchBy')}</Typography>
      <Select id="queryTypeSelector" value={type} onChange={handleChange}>
        {keys.map((key) => (
          <MenuItem key={key} value={key}>
            {d(key)}
          </MenuItem>
        ))}
      </Select>
    </Container>
  )
}
