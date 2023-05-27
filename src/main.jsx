import React from 'react'
import Nav from './Components/Nav'
import './reset.css'
import Footer from './Components/Footer'
import ViewMores from './Components/ViewMores'
import Call from './Components/Call'
import Internos from './Components/Internos'
import Brands from './Components/Brands'
import RecentProjects from './Components/RecentProjects'
import Us from './Components/Us'
import Blogs from './Components/Blogs'
import Join from './Components/Join'
import End from './Components/End'

const Main = () => {
  return (
    <div>
        <Nav/>
        <Footer/>
        <ViewMores/>
        <Call/>
        <Internos/>
        <Brands/>
        <RecentProjects/>
        <Us/>
        <Blogs/>
        <Join/>
        <End/>
    </div>
  )
}

export default Main