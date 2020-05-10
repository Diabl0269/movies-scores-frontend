import React from 'react'
import { HashLoader } from 'react-spinners'
import { useMovies } from '../../context/MoviesProvider'
import idsGenres from '../../data/moviesIdsGenres'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import ScoresPopper from './ScoresPopper'
import d from '../../data/dictionary'

export default () => {
  const { gettingRecords, movies, type } = useMovies()

  const RecordsList = () => (
    <TableContainer id="recordsListContainer">
      <Table id="recordsList">
        <TableHead id="recordsListHeader">
          <TableRow>
            <TableCell>{d('movies')}</TableCell>
            <TableCell>{d('genres')}</TableCell>
            <TableCell>{d('releaseYear')}</TableCell>
            <TableCell id="scoresHeadCell">{d('scores')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies &&
            movies.map((movie, index) => {
              const { name, averageScoreObj, genre_ids, releaseYear } = movie
              let genresDisplay = ''
              genre_ids.forEach((id, index) => {
                if (index === genre_ids.length - 1) return (genresDisplay += `${idsGenres[id]}`)
                genresDisplay += `${idsGenres[id]}/`
              })

              return (
                <TableRow key={index}>
                  <TableCell key={name}>{name}</TableCell>
                  <TableCell>{genresDisplay}</TableCell>
                  <TableCell>{releaseYear}</TableCell>

                  <TableCell id="showScoresColumn">
                    <ScoresPopper averageScoreObj={averageScoreObj} movie={movie} name={name} />
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )

  return gettingRecords ? <HashLoader /> : <RecordsList />
}
