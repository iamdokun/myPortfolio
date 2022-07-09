import React from 'react'
import "./portfolio.scss"


export default function PortfolioList({item, setSelected, active }) {
  return (
    <li className={`portfolioList ${active && "active"}`} onClick={() => setSelected(item.id)}>
      {item.title}
    </li>
  )
}
