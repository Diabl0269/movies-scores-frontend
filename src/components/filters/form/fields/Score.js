import React from 'react'
import { useFormikContext } from 'formik'
import { Select, MenuItem } from '@material-ui/core'
import handleFormikChange from '../../../../utils/handleFormikChange'
import d from '../../../../data/dictionary'
import FormControlWithLabel from '../../../utils/FormControlWithLabel'

export default () => {
  const {
    setFieldValue,
    values: { min, max, sortBy }
  } = useFormikContext()

  const handleChange = (e) => {
    handleFormikChange(setFieldValue, e)
  }

  const scores = []
  for (let i = 0; i < 11; i++) scores.push(i)

  const minScoresToDisplay = scores.filter((score) => (max ? score < max : true))
  const maxScoresToDisplay = scores.filter((score) => (min ? score > min : true))

  return (
    <>
      <>
        <FormControlWithLabel
          labelText={d('min')}
          Component={() => (
            <Select name="min" onChange={handleChange} value={min || 0}>
              {minScoresToDisplay.map((score) => (
                <MenuItem value={score}>{score}</MenuItem>
              ))}
            </Select>
          )}
        />

        <FormControlWithLabel
          labelText={d('max')}
          Component={() => (
            <Select name="max" onChange={handleChange} value={max || 10}>
              {maxScoresToDisplay.map((score) => (
                <MenuItem value={score}>{score}</MenuItem>
              ))}
            </Select>
          )}
        />
      </>

      <FormControlWithLabel
        labelText={d('sortBy') + ' ' + d('score')}
        Component={() => (
          <Select
            name="sortBy"
            onChange={handleChange}
            value={sortBy || 'desc'}
          >
            <MenuItem value="desc">{d('descending')}</MenuItem>
            <MenuItem value="asc">{d('ascending')}</MenuItem>
          </Select>
        )}
      />
    </>
  )
}
