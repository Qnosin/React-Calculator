import React from 'react'
import Author from '../image/author.png'
import App from '../image/app.PNG'
import Info from '../image/info.png'
import { useNavigate } from "react-router-dom";

function HomeContent() {
    let navigate = useNavigate();
  return (
      <>
      <div className='home__content'>
    <section className='Author'>
       <img className='homeimg' onClick={()=> navigate('/author')} src={Author} alt="author pictogram" />
    </section>
    <section className='App-demo'>
    <img className='homeimg App-img' onClick={()=> navigate('/calculator')} src={App} alt="author pictogram" />
    </section>
    <section className='App-Info'>
    <img className='homeimg info-img' onClick={()=> navigate('/app-info')} src={Info} alt="author pictogram" />
    </section>
    </div>
    </>
  )
}

export default HomeContent