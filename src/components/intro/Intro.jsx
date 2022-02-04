import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef = useRef();

  useEffect(()=> {

    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      backSpeed:100,
      showCursor: true,
      strings: ["2nd year Computer Science Engineering student at Amity University.", "Have done few full stack projects"],
    });
  },[])
  return (
   <div className="intro" id="intro">
     <div className="left">
       <div className="imgContainer">
         <img src="assets/a2.jpg" alt=""/>
       </div>
     </div>
     <div className="right">
       <div className="wrapper">
       <h2>Hi There👋I'm</h2>
       <h1>Arun</h1>
       <h3> <span ref={textRef}></span></h3>
       
       </div>
     <a href="#portfolio"> <img src="assets/down.png" alt=""/></a>
     </div>
  </div>
  )
}
