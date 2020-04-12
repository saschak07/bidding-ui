import React from 'react'
import './ProjectForm.css'
const projectForm = (props) => {
    return(
            <div className="w3-card w3-animate-zoom w3-white project-body">
         <div className="w3-container w3-white w3-cell project-content">

                <label className="w3-text-blue"><b>Assignment name</b></label>
                <input className="w3-input w3-border" type="text"/>
                
                <label className="w3-text-blue"><b>Location within country</b></label>
                <input className="w3-input w3-border" type="text"/>

                <label className="w3-text-blue"><b>Name of client</b></label>
                <input className="w3-input w3-border" type="text"/>
                <label className="w3-text-blue"><b>Address</b></label>
                <input className="w3-input w3-border" type="text"/>
                <label className="w3-text-blue"><b>Start date</b></label>
                <input className="w3-input w3-border" type="date"/>
                <label className="w3-text-blue"><b>Completion date</b></label>
                <input className="w3-input w3-border" type="date"/>
                <label className="w3-text-blue"><b>Name of Associated Consultants, if any</b></label>
                <input className="w3-input w3-border" type="text"/>
 
        </div> 
        <div className="w3-container w3-white w3-cell project-content">
                <label className="w3-text-blue"><b>Country</b></label>
                <input className="w3-input w3-border" type="text"/>

                <label className="w3-text-blue"><b>Professional Staff provided by consultant (profiles)</b></label>
                <input className="w3-input w3-border" type="text"/>

                <label className="w3-text-blue"><b>No. of Staffs</b></label>
                <input className="w3-input w3-border" type="text"/>
                <label className="w3-text-blue"><b>Duration of assignment</b></label>
                <input className="w3-input w3-border" type="text"/>
                <label className="w3-text-blue"><b>Approx. Value of services (in Current US$):</b></label>
                <input className="w3-input w3-border" type="text"/>
                <label className="w3-text-blue"><b>No of Months of Professional Staff provided by Associated Consultants:</b></label>
                <input className="w3-input w3-border" type="text"/>


        </div>
        <div className="w3-container project-content">
                <label className="w3-text-blue"><b>Name of senior staff (Project Director/Coordinator, Team Leader) involved and functions performed:</b></label>
                <input className="w3-input w3-border" type="text"/>
                <label className="w3-text-blue"><b>Narrative description of Project:</b></label>
                <textarea className="w3-input w3-border"/>
                <label className="w3-text-blue"><b>Description of actual services provided by your Staff:</b></label>
                <textarea className="w3-input w3-border"/>
                <button className="w3-btn w3-blue project-button"
                onClick={props.clickNext}>Next</button>
        </div>
        
        </div>
        
    )
}
export default projectForm