import React from 'react'
import "./footer.css"
import penguin from "../../assets/penguin.svg"


const Footer = () => {
    return (
        <div className="footer">
            <h5>Created by The Penguin Posse</h5>
            <img className="penguin" src={penguin} alt="penguin"/>
        </div>
    )
}

export default Footer