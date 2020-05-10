import React from 'react'
import {Typography} from '@material-ui/core'
import d from '../../data/dictionary';

export default () => {
  return (
      <Typography component="div" id='footerContainer'>
        <img src="/images/TMDBLogo.svg" alt={d('tmdbLogo')}/>
        <span>{d('footerMessage')}</span>
        <img src="/images/MuiLogo.svg" alt={d('muiLogo')}/>
      </Typography>
  )
}
