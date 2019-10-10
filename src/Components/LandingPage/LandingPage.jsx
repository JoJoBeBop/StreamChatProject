import React,{useEffect,useRef,useState} from 'react';
import "./LandingPage.scss"
import {Link} from 'react-router-dom'
import {TweenMax} from "gsap";
import playButton from"../../Media/play.jpg"
import twitter from "../../Media/twitter.png";
import facebook from "../../Media/facebook.jpg";
import instagram from "../../Media/instagram.png";
import youtube from "../../Media/youtube.jpg";

const LandingPage = () => {
    const [state,setState]=useState(false)
    let myTitle = useRef(null);
    let myButton = useRef(null);
    const title1 = TweenMax;

useEffect(()=>{
    setTimeout(()=>{animation()},1000)
},[])
    const animation = () => {
    setState(true)
        title1.fromTo(myTitle.current,  1.25, { y: 500 }, { y: -40})
        title1.fromTo(myButton.current,  1.5, { y: 500 }, { y: -40 })

    }
    const className = () =>{
    if(state===false){
        return "hidden"
    }else{
        return "visible"
    }
    }
    return (
        <div className="LandingPageContainer">
            <h1 className={className()} ref={myTitle}>
                WELCOME TO STUD STREAM!
            </h1>
            <Link className={className()} ref={myButton} to="/single">
                <button>
                <img src={playButton}/>
                </button>
            </Link>
            <div className={"logoHolder"}>
                <a href="https://twitter.com/fjamie013?lang=fi">
                <img className={"logo"} src={twitter}/>
                </a>
                <a href="https://www.facebook.com/danbilzerianofficial">
                <img className={"logo"} src={facebook}/>
                </a>
                <a href="https://www.instagram.com/kimkardashian/?hl=fi">
                <img className={"logo"} src={instagram}/>
                </a>
                <a href="https://www.youtube.com/user/PewDiePie">
                <img className={"logo"} src={youtube}/>
                </a>
            </div>
        </div>
    );
}

export default LandingPage;