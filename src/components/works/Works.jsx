import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
 const data = [


  {
    id: "1",
    icon: "./assets/down.png",
    title: "Crypto Ape",
    desc:
     "Created this Crypto Ape with NFTs deployed on OpenSea using React and Etheruem Blockchain, deployed my own market place on OpenSea.",
    img:
     "assets/cryptoApe.jpg",
  },
{
        id: "2",
        icon: "./assets/down.png",
        title: "Photo Sharing App",
        desc:
         "A photo sharing version of instagram created using React with backend created using firebase where you can login, logout, like and create new post etc.",
        img:
         "assets/insta.jpeg",
      },
    
      {
        id: "3",
        icon: "./assets/down.png",
        title: "VideoCalling Zoom",
        desc:
         "Created this Zoom useing React Native, NodeJS, Firebase and SocketIO, where you can create a new meeting and connect with people in any room and allow you to chat. NodeJS is used to connect every single person in a room and SocketIO is used to connect everyone live.",
        img:
         "assets/zoom1.jpeg",
      },
      {
        id: "4",
        icon: "./assets/down.png",
        title: "Portfolio",
        desc:
         "Created my own portfolio website and deployed online.",
        img:
         "assets/p3.jpeg",
      },
      ]; 

      const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ?  currentSlide-1 : 2)
        : setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0);
      };
  return ( 
    
  <div className="works" id="works">
    <div className="heading">
      <h1>Projects</h1>

    
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
          {data.map((d) => (
         <div className="container">
           
          <div className="item">
            
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">

                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
           <div className="right">
             <img
              src={d.img}
             alt=""
             />
           </div>
          </div>
          
        </div>
        ))}
      </div>
      
      <img src="assets/left1.png"  className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/r1.png"  className="arrow right" alt="" onClick={() => handleClick()}/>
      </div>
    </div>
  )
}
