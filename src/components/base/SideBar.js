import React from 'react'
import {
  Slide,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Drawer
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import d from '../../data/dictionary'
import { navigate } from 'hookrouter'

const useStyles = makeStyles({
  list: {
    width: 250
  }
})

export default ({ open, setOpen }) => {
  const classes = useStyles()

  const links = [
    { text: d('home'), icon: <HomeIcon />, clickHandler: () => navigate('/') },
    { text: d('account'), icon: <AccountCircleIcon />, clickHandler: () => navigate('/account') }
  ]

  const toggleDrawer = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpen(!open)
  }

  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <Slide direction="right" in={open} mountOnEnter unmountOnExit>
        <div className={classes.list} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            {links.map(({ text, icon, clickHandler }) => (
              <ListItem button key={text} onClick={clickHandler}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Slide>
    </Drawer>
  )
}
