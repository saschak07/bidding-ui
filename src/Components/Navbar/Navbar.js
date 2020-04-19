import React from 'react'
import './Navbar.css'

const navbar = () => {
    return ( <div className="w3-bar w3-black ">
    <a href="/" className="w3-bar-item w3-button">Home</a>
    <a href="/" className="w3-bar-item w3-button">All Tenders</a>
    <a href="/template-upload" className="w3-bar-item w3-button">Upload Proposal Template</a>
    <a href="/" className="w3-bar-item w3-button">Proposals</a>
    <a href="/" className="w3-bar-item w3-button">Help</a>
  </div> )
}

export default navbar