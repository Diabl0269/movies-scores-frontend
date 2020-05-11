import React, { useState } from 'react'
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone'
import { Fade, Paper, Popper, Typography, Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import getMovieScore from '../../api/movies/getMovieScore'
import updateMovieScore from '../../api/movies/updateMovieScore'
import d from '../../data/dictionary'
import { useUser } from '../../context/AuthUserProvider'

export default ({ movie }) => {
  const { averageScoreObj: { average, count } = {}, name } = movie
  const [averageDisplay, setAverageDisplay] = useState(average)
  const [countDisplay, setCountDisplay] = useState(count)
  const [anchorEl, setAnchorEl] = useState(null)
  const { user } = useUser()
  const userExists = Object.keys(user).length > 0

  const handleOpen = async (event) => {
    event.persist()
    if (averageDisplay === undefined) {
      const { average, count } = await getMovieScore(name)
      setAverageDisplay(average)
      setCountDisplay(count)
    }
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const changeHandler = async (e) => {
    if (!userExists) return alert(d('needToLogin'))
    const { average, count } = await updateMovieScore({ name, score: e.target.value })
    setAverageDisplay(average)
    setCountDisplay(count)
  }

  const open = Boolean(anchorEl)

  const AverageScoreMessage = () => (
    <div id="messageContainer">
      <Typography>{countDisplay + ' ' + d('scoreCountMessage')}</Typography>
      <Typography>{d('score') + ': ' + averageDisplay}</Typography>
    </div>
  )

  const FirstScoreMessage = () => (
    <Typography id="messageContainer">{d('firstScoreMessage')}</Typography>
  )

  return (
    <>
      <StarsTwoToneIcon onClick={handleOpen} />
      <Popper open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper id="scorePoper">
              {countDisplay > 0 ? <AverageScoreMessage /> : <FirstScoreMessage />}
              <Box component="fieldset" borderColor="transparent">
                <Rating max={10} onChange={changeHandler} name={name} />
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}
