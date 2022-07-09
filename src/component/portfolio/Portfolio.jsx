import React, { useState } from "react";
import "./portfolio.scss";
import PortfolioList from "./portfolioList";
import { useEffect } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
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
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {/* <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Business Analyst</li>
        <li>Leadership</li>
        <li>Branding</li> */}

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
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IA1T9DX9zFXCIpHqmbj7YAU1VDbeYGX4Tw&usqp=CAU"
            alt=""
          />
          <h3>Social Media App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IA1T9DX9zFXCIpHqmbj7YAU1VDbeYGX4Tw&usqp=CAU"
            alt=""
          />
          <h3>Social Media App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IA1T9DX9zFXCIpHqmbj7YAU1VDbeYGX4Tw&usqp=CAU"
            alt=""
          />
          <h3>Social Media App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IA1T9DX9zFXCIpHqmbj7YAU1VDbeYGX4Tw&usqp=CAU"
            alt=""
          />
          <h3>Social Media App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IA1T9DX9zFXCIpHqmbj7YAU1VDbeYGX4Tw&usqp=CAU"
            alt=""
          />
          <h3>Social Media App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IA1T9DX9zFXCIpHqmbj7YAU1VDbeYGX4Tw&usqp=CAU"
            alt=""
          />
          <h3>Social Media App</h3>
        </div>
        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IA1T9DX9zFXCIpHqmbj7YAU1VDbeYGX4Tw&usqp=CAU"
            alt=""
          />
          <h3>Social Media App</h3>
        </div>
      </div>
    </div>
  );
}
