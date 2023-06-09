import { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";
import {featuredPortfolio, webPortfolio} from "../../data"

export default function Portfolio() {
     const [selected,setSelected] = useState("featured");
     const [data,setData] = useState([]);
   const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
   ];

   useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);

    }   

   },[selected])

  return (
    <div className="Portfolio" id="Portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
           title={item.title}
           active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
        ))}

      </ul>
      <div className="container">
        {data.map(d=>(
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
