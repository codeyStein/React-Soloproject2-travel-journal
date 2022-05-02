import React from "react"
import "../style.css"

export default function Nav() {
  return (
    <div className="nav">
      <img alt="Nav Icon" src={'./image/earth.png'} className="nav--icon"/>
      <h1 className="nav--header">My Travel Journal</h1>
    </div>
  )
}