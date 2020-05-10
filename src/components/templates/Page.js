import React, { useState } from 'react'
import SideBar from '../base/SideBar'
import Header from '../base/Header'
import Footer from '../base/Footer'

export default ({Content, title}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <SideBar open={open} setOpen={setOpen} />}
      <div id='innerPageContainer'>
        <Header setOpen={setOpen} title={title} />
        <Content />
        <Footer />
      </div>
    </>
  )
}
