import React from "react"


export default function Cards(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image" />
            <div className="card--details">
                <img src="../assets/MapIcon.png" className="card--map-icon" />
                <span className="card--location">{props.location}</span>
                <a className="card--map-link" href={props.googleMapsUrl}>View on Google Maps</a>
                <h4 className="card--title">{props.title}</h4>
                <span className="card--date-range">{props.startDate} - {props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
            {props.hrElement && <hr className="class--divider" />}
        </div>


    )
}