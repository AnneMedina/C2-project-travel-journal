import React from "react"
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import data from "./data.js"


export default function App() {
    const cards = data.map((item, key) => {
        return (
            <Card
                key={key}
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
                hrElement={key == (data.length - 1) ? false : true}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <section className="journals">{cards}</section>
        </div>
    )
}