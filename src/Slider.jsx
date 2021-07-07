import React from 'react';
import x from './Images/Celeb1.jpg';
import y from './Images/celeb2.jpg';
import z from './Images/celeb3.jpg';
import './index.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Slider = () =>{

    const next= () =>{
       let a = document.getElementById('p3');
       let b = document.getElementById('p2');
       let c = document.getElementById('p1');
       if((a.style.zIndex==b.style.zIndex) && (b.style.zIndex==c.style.zIndex)) 
       a.style.zIndex--;
       else if((a.style.zIndex!=b.style.zIndex) && (b.style.zIndex==c.style.zIndex))
       b.style.zIndex--;
       else
       c.style.zIndex--;
    }
    const back= () =>{
        let a = document.getElementById('p3');
        let b = document.getElementById('p2');
        let c = document.getElementById('p1');
        if((a.style.zIndex==b.style.zIndex) && (b.style.zIndex==c.style.zIndex)) 
        c.style.zIndex++;
        else if((a.style.zIndex!=b.style.zIndex) && (b.style.zIndex==c.style.zIndex))
        a.style.zIndex++;
        else
        b.style.zIndex++; 
    }

    return (
        <div id="SlideBox">
        <img src={x} className="slideImage" id="p1" alt="Slide"/>   
        <img src={y} className="slideImage" id="p2" alt="Slide"/>   
        <img src={z} className="slideImage" id="p3" alt="Slide"/> 
        <ArrowBackIcon style={{fontSize:"5vw"}} id="back" onClick={back}/>  
        <ArrowForwardIcon style={{fontSize:"5vw"}} id="forward" onClick={next}/>
        </div>
    )
}
export default Slider;