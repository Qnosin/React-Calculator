import React from 'react'
import  { useState } from 'react';
import ButtonContent from '../components/ButtonContent';
import Window from '../components/Window';
import HamburgerMenu from '../components/HamburgerMenu';
import OpenHamburger from '../image/hamburger-menu-open.png';
import CloseHamburger from '../image/hamburger-close.webp';


function Calculator({isOpen,setisOpen}) {
    const [result,setResult] = useState([]);
    const [isSum,setisSum] = useState(false);
    const hamburgerHandle = ()=>{
        setisOpen(!isOpen)
      }
  return (
    <div className='calculator-content'>
    {isOpen === false ? <img className='hamburger-open' src={OpenHamburger} onClick={hamburgerHandle}></img> :  <img className='hamburger-open' src={CloseHamburger} onClick={hamburgerHandle}></img>}
    {isOpen && <HamburgerMenu></HamburgerMenu>}
      <div className='content'>
          <Window  result={result} isSum={isSum} ></Window>
          <ButtonContent isSum={isSum} setisSum={setisSum} result={result} setResult={setResult}></ButtonContent>
      </div>
    </div>
  );
}

export default Calculator