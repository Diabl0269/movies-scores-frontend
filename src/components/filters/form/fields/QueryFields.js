import React from 'react'
import { useFormikContext } from 'formik'
import { Select, MenuItem, Checkbox, ListItemText, Typography } from '@material-ui/core'
import handleFormikChange from '../../../../utils/handleFormikChange'
import d from '../../../../data/dictionary'
import FormControlWithLabel from '../../../utils/FormControlWithLabel'
import genresList from '../../../../data/moviesGenres.json'

export default () => {
  const {
    setFieldValue,
    values: {
      score: { min: minScore, max: maxScore },
      sortBy,
      genres: selectedGenres,
      releaseYear: { min: minReleaseYear, max: maxReleaseYear }
    },
    values
  } = useFormikContext()

  const handleChange = (e) => {
    handleFormikChange(setFieldValue, e)
    console.log(values)
  }

  const scores = []
  for (let i = 0; i < 11; i++) scores.push(i)

  const releaseYears = []
  for (let i = 1900; i < 2501; i++) releaseYears.push(i)

  const minScoresToDisplay = scores.filter((score) => (maxScore ? score < maxScore : true))
  const maxScoresToDisplay = scores.filter((score) => (minScore ? score > minScore : true))

  const minReleaseYearsToDisplay = releaseYears.filter((year) =>
    maxReleaseYear ? year < maxReleaseYear : true
  )
  const maxReleaseYearsToDisplay = releaseYears.filter((year) =>
    minReleaseYear ? year > minReleaseYear : true
  )

  return (
    <>
      <>
        {/* Score selector */}
        <>
          <Typography id="scoreTitle">{d('score') + ':'}</Typography>
          <div id="scoreFieldsContainer">
            <FormControlWithLabel
              labelText={d('min')}
              Component={() => (
                <Select name="score.min" onChange={handleChange} value={minScore || 0}>
                  {minScoresToDisplay.map((score) => (
                    <MenuItem key={`minScore${score}`} value={score}>
                      {score}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />

            <FormControlWithLabel
              labelText={d('max')}
              Component={() => (
                <Select name="score.max" onChange={handleChange} value={maxScore || 10}>
                  {maxScoresToDisplay.map((score) => (
                    <MenuItem key={`maxScore${score}`} value={score}>
                      {score}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
        </>
      </>

      <>
        {/* Release Year selector */}
        <>
          <Typography id="releaseYearTitle">{d('releaseYear') + ':'}</Typography>
          <div id="releaseYearFieldsContainer">
            <FormControlWithLabel
              labelText={d('min')}
              Component={() => (
                <Select
                  name="releaseYear.min"
                  onChange={handleChange}
                  value={minReleaseYear || 1900}
                >
                  {minReleaseYearsToDisplay.map((year) => (
                    <MenuItem key={`minReleaseYear${year}`} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />

            <FormControlWithLabel
              labelText={d('max')}
              Component={() => (
                <Select
                  name="releaseYear.max"
                  onChange={handleChange}
                  value={maxReleaseYear || 2500}
                >
                  {maxReleaseYearsToDisplay.map((year) => (
                    <MenuItem key={`maxReleaseYear${year}`} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
        </>
      </>

      {/*Geners selector */}
      <FormControlWithLabel
        labelText={d('genres')}
        formControlId="genreSelectorContainer"
        Component={() => (
          <Select
            id={'genreSelector'}
            renderValue={(selected) => selected.join(', ')}
            name="genres"
            multiple
            onChange={handleChange}
            value={selectedGenres || []}
          >
            {genresList.map((genre) => (
              <MenuItem key={genre} value={genre}>
                <Checkbox checked={selectedGenres.includes(genre)} />
                <ListItemText primary={genre} />
              </MenuItem>
            ))}
          </Select>
        )}
      />

      {/*Sort by selector */}
      <FormControlWithLabel
        labelText={d('sortBy')}
        Component={() => (
          <Select name="sortBy" onChange={handleChange} value={sortBy || 'desc'}>
            <MenuItem value="-releaseYear">{`${d('releaseYear')} ${d('descending')}`}</MenuItem>
            <MenuItem value="releaseYear">{`${d('releaseYear')} ${d('ascending')}`}</MenuItem>
            <MenuItem value="-averageScoreObj.average">{`${d('score')} ${d(
              'descending'
            )}`}</MenuItem>
            <MenuItem value="averageScoreObj.average">{`${d('score')} ${d('ascending')}`}</MenuItem>
          </Select>
        )}
      />
    </>
  )
}
