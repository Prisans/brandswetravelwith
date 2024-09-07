import React, {useEffect, useRef} from 'react'
import './Home.css'
import { GiCowled } from "react-icons/gi";
import { gsap } from 'gsap';

const Home = () => {

    const words = ["Brands" , "Electronics" ,"Cars" , "Airlines" , "Snacks" , "Alocohol" , "Retail"]

    const textRef = useRef();

    useEffect(()=>{
        const tl = gsap.timeline({repeat : -1 , repeatDelay : 0.5});
        words.forEach((data, index)=>{
            tl.to(textRef.current , {
                duration : 0.5,
                y : -20,
                opacity : 0,
                onComplete : ()=>{
                    textRef.current.innerText = data;
                },
            }).to(textRef.current , {
                duration : 0.5,
                y:0,
                opacity:1
            })
        })
    })

  return (
    <div className="home-container">
        <div className="navbar">
            <div className="logo"><GiCowled className='logo-icon'/></div>
            <div className="logo-txt">
                <p>Brands We Travel With</p>
            </div>
        </div>
        <div className="home-content">
            <h1>
                <p><span ref={textRef} >Brands</span> <br /> We <br /> Travel <br /> With</p>
                
                </h1>
        </div>
    </div>
  )
}

export default Home