import React from 'react'
import Author from '../image/author.png'
import App from '../image/app.png'
import { useNavigate } from "react-router-dom";

function HomeContent() {
    let navigate = useNavigate();
  return (
      <>
      <div className='home__content'>
    <section className='Author'>
       <img className='homeimg' onClick={()=> navigate('/author')} src={Author} alt="author pictogram" />
       <h2>Author</h2>
    </section>
    <section className='App-demo'>
    <img className='homeimg App-img' onClick={()=> navigate('/calculator')} src={App} alt="author pictogram" />
    <h2>App</h2>
    </section>
    </div>
    </>
  )
}

export default HomeContent