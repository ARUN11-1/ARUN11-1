import React from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss"
import {useState, useEffect } from "react";
import {featuredPortfolio,
  flutterPortfolio,
  toolsPortfolio
} from "../../data";


export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Languages",
    },
    {
      id: "framework",
      title: "FrameWorks",
    },
    {
      id: "tools",
      title: "Tools",
    },
    
  ];

  useEffect(()=>{
switch(selected){
  case "featured":
  setData(featuredPortfolio);
  break;
  case "framework":
    setData(flutterPortfolio);
    break;
    case "tools":
      setData(toolsPortfolio);
      break;
      default:
        setData(featuredPortfolio);

}
}, [selected])
  return (
  <div className="portfolio" id="portfolio">
<h1>Skills</h1>
<ul>
 {list.map((item) => (
   <PortfolioList title={item.title}
    active={selected === item.id}
    setSelected={setSelected}
    id={item.id}
    />
 ))}
</ul>
<div className="container">
  {data.map((d) => (
<div className="item">
    <img
     src={d.img}
    alt=""
    />
    <h3>{d.title}</h3>
    </div>
    ))}
  </div> 
  </div>
  );
}
