import React from "react"
import "https://kit.fontawesome.com/ad651495c0.js"

export default function Card(props) {
  return (
    <div className="card">

      <img className="card--image" src={`./image/${props.item.imageUrl}`} />

      <div className="card--details">

        <div className="card--location">
          <i className="fa-solid fa-location-dot location--icon"></i>
          <p className="location--location">{props.item.location}</p>
          <a className="location--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h2 className="card--header">{props.item.title}</h2>
        

        <h6 className="card--date">{props.item.startDate} - {props.item.endDate}</h6>

        <p className="card--description">{props.item.description}</p>

      </div>


    </div>
  )
}
