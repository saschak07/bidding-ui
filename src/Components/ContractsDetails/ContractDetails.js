import React from 'react'
import './ContractDetails.css'
const contractsDetails = (props) => {
    return (
        <div className="w3-card w3-animate-zoom w3-white details-body" 
        data-testid="ContractDetailsContainer">
        <div className="content header"> <h2>{props.companyName}</h2></div>
        <div className="content"> <p> {props.subject}</p></div>
        <div className="content"> <p>date of Issue : {props.dateOfIssue} 
        <span className="w3-tag w3-yellow">PRN:{props.PRN}</span></p></div>
        <div className="content"><button className="w3-button w3-blue button"
        data-testid="submit-proposal"
        onClick={props.clicked}>Submit Proposal</button></div>
      </div> 
    )
}

export default contractsDetails;