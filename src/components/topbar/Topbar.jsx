import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
  <div className={"topbar " + (menuOpen && "active")}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo" className="logo">arun.</a>
        <div className="itemContainer">
          <Person classname="icon"/>
          <span>
            9074242347
            </span>

        </div>
        <div className="itemContainer">
          <Mail classname="icon"/>
          <span>
            arunsinghtomar11@gmail.com
            </span>
            <div className='colz'>
      <a href="https://github.com/ARUN11-1">
                 <i className='fa fa-github'></i>
             </a>
         <a href="#">
                 <i className='fa fa-twitter-square'></i>
             </a>
             <a href="https://www.instagram.com/arun.singhtomar/">
                 <i className='fa fa-instagram'></i>
             </a>
             <a href="https://www.linkedin.com/in/arun-singh-tomar-aa6830201">
                 <i className='fa fa-linkedin'></i>
               

             </a>

             

      </div>

        </div>
      </div>
      
      <div className="right">
      <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
        <span>
          "line1"
        </span>
        <span>
          "line2"
        </span>
        <span>
          "line3"
        </span>
        
      </div>
     
      </div>

    </div>

  </div>
  )
}
