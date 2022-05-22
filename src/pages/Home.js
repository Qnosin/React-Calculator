import React from 'react'
import Navbar from '../components/Navbar.jsx'; 
import '../home.css';
import HomeContent from '../components/HomeContent.jsx';
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <HomeContent></HomeContent>
    </>
  )
}

export default Home