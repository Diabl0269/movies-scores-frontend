import React from 'react'
import { useFormikContext } from 'formik'
import { Select, MenuItem, Checkbox, ListItemText } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import handleFormikChange from '../../../../utils/handleFormikChange'
import d from '../../../../data/dictionary'
import FormControlWithLabel from '../../../utils/FormControlWithLabel'
import genres from '../../../../data/moviesGenres.json'
import { useMovies } from '../../../../context/MoviesProvider'

export default () => {
  const { page: currentPage, totalPages } = useMovies()
  const {
    setFieldValue,
    values: { year, page, with_genres, sort_by },
    values
  } = useFormikContext()

  const handleChange = (e) => {
    console.log(values);
    
    handleFormikChange(setFieldValue, e)
  }

  const years = []
  for (let i = 1900; i < 2100; i++) years.push(i)

  return (
    <>
      <>
        <FormControlWithLabel
          labelText={d('genres')}
          formControlId="genreSelectorContainer"
          Component={() => (
            <Select
              id={'genreSelector'}
              renderValue={(selected) => selected.join(', ')}
              name="with_genres"
              multiple
              onChange={handleChange}
              value={with_genres || []}
            >
              {genres.map((genre) => (
                <MenuItem value={genre}>
                  <Checkbox checked={with_genres && with_genres.includes(genre)} />
                  <ListItemText primary={genre} />
                </MenuItem>
              ))}
            </Select>
          )}
        />

        <FormControlWithLabel
          labelText={d('year')}
          Component={() => (
            <Select name="year" onChange={handleChange} value={year || 1900}>
              {years.map((year) => (
                <MenuItem value={year}>{year}</MenuItem>
              ))}
            </Select>
          )}
        />
      </>

      <FormControlWithLabel
        labelText={d('sortBy') + ' ' + d('date')}
        Component={() => (
          <Select name="sort_by" onChange={handleChange} value={sort_by || 'release_date.desc'}>
            <MenuItem value="release_date.desc">{d('descending')}</MenuItem>
            <MenuItem value="release_date.asc">{d('ascending')}</MenuItem>
          </Select>
        )}
      />

      <Pagination name='page' count={totalPages} page={page} onChange={handleChange}/>
    </>
  )
}
