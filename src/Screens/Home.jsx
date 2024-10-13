import React from 'react'

import SIdeBar from '../Components/SideBar'
import Library from "./Library"
import '../Styles/home.css'
import { Outlet } from 'react-router-dom'

const Home = () => {


  return (
    <div className='main-body'>
      <SIdeBar></SIdeBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
