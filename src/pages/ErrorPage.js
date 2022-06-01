import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router'
function ErrorPage() {
    let navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');
        },2000)
    },[navigate])
  return (
      <>
      <Navbar/>
      <div className='errorText'>Ups we can't find your page!</div>
      </>
  )
}

export default ErrorPage