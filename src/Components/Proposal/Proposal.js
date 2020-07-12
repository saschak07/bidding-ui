import React from 'react'
import './Proposal.css'

const proposal = (props) =>{
    console.log(props)
    return (
        <div className="w3-card w3-animate-zoom w3-white proposal-body">
            <div className="proposal-content proposal-header"> <h2>{props.name} for {props.bidding_for_client}</h2></div>
            <div className="proposal-content">
            <div className=" w3-cell proposal-button">
                <a href={"http://localhost:9000/docService/contractor/getFile/"+props.contractorId}>
                <button className="w3-button w3-blue button ">Click to view proposal</button></a></div>

                <div className=" w3-cell proposal-button">
                <button className="w3-button w3-red button "
                onClick={props.remove}>Remove proposal</button></div>
            </div>
        </div>
        
    )
}

export default proposal