import React, { useState } from "react";
import "./portfolio.scss";
import PortfolioList from "./portfolioList";
import { useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "ba",
      title: "Business Analyst",
    },
    {
      id: "leadership",
      title: "Leadership",
    },
    // {
    //   id: "branding",
    //   title: "Branding",
    // },
  ];

  useEffect(() => {

    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
    
      case "mobile":
        setData(mobilePortfolio)
        break;
    
      case "ba":
        setData(designPortfolio)
        break;
    
      case "leadership":
        setData(contentPortfolio)
        break;

      case "branding":
        setData(featuredPortfolio)
        break;
    
      default:
        break;
    }

  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            item={item}
            key={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((dataItem) => (<div className="item" key={dataItem.id}>
          <img
            src={dataItem.img}
            alt=""
          />
          <h3>{dataItem.title}</h3>
        </div>))}
        
      </div>
    </div>
  );
}
