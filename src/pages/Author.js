import React from 'react'
import Navbar from '../components/Navbar';
import Me from '../image/linkedin_profile_image.png';
import Linkedind from '../image/linkedin-icon.svg';
import Github from '../image/github-icon.svg';
import AuthorCss from '../author.css';
import HamburgerMenu from '../components/HamburgerMenu';
import OpenHamburger from '../image/hamburger-menu-open.png';
import CloseHamburger from '../image/hamburger-close.webp';
import { Link } from 'react-router-dom';
function Author({isOpen,setisOpen}) {
    const handleLink = () =>{
        window.open('https://www.linkedin.com/in/jakub-putaj-531094216/', '_blank');
    }
    const handlegit = () =>{
        window.open('https://github.com/Qnosin', '_blank');
    }
    const hamburgerHandle = ()=>{
        setisOpen(!isOpen)
      }
  return (
      <>
      <Navbar />
    <section className='Wrapper'>
        {isOpen === false ? <img className='hamburger-open' src={OpenHamburger} onClick={hamburgerHandle}></img> :  <img className='hamburger-open' src={CloseHamburger} onClick={hamburgerHandle}></img>}
        {isOpen && <HamburgerMenu></HamburgerMenu>}
        <div className='image'>
        <h1>App is created by:</h1>
        <img className='My__Picture' alt='my profile' src={Me}></img>
        </div>
        <div className='my__socials'>
        <h2>You can see my other work in this media:</h2>
        <img onClick={handleLink} className='linkedin' src={Linkedind} alt='linkedin'></img><span className='first-span'>/jakub-putaj</span>
        <img onClick={handlegit} src={Github} alt='Github'></img><span>/Qnosin</span>
        </div>
        <div className='small__screen__navigation'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/calculator'}>App</Link>
        </div>
    </section>
    </>
  )
}

export default Author