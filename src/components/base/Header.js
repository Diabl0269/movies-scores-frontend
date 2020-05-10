import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: 'green'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default ({ setOpen, title }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} id='title'>
            {title}
          </Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
