import React from 'react'
import './ProjectForm.css'
const projectForm = (props) => {
    return(
            <div className="w3-card w3-animate-zoom w3-white project-body">
         <div className="w3-container w3-white w3-cell project-content">

                <label className="w3-text-blue"><b>Assignment name</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.assignmentNameChange} value={props.assignmentName}/>
                
                <label className="w3-text-blue"><b>Location within country</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.locationChange} value={props.location}/>

                <label className="w3-text-blue"><b>Name of client</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.clientNameChange} value={props.clientName}/>
                <label className="w3-text-blue"><b>Address</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.addressChange} value={props.address}/>
                <label className="w3-text-blue"><b>Start date</b></label>

                <input className="w3-input w3-border" type="date"
                onChange={props.startDateChange} value={props.startDate}/>
                <label className="w3-text-blue"><b>Completion date</b></label>
                <input className="w3-input w3-border" type="date"
                onChange={props.completionDateChang} value={props.completionDate}/>
                <label className="w3-text-blue"><b>Name of Associated Consultants, if any</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.associateConsultantChange} value={props.associateConsultant}/>
 
        </div> 
        <div className="w3-container w3-white w3-cell project-content">
                <label className="w3-text-blue"><b>Country</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.countryChange} value={props.country}/>

                <label className="w3-text-blue"><b>Professional Staff provided by consultant (profiles)</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.staffChange} value={props.staff}/>

                <label className="w3-text-blue"><b>No. of Staffs</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.noOfStaffChange} value={props.noOfStaff}/>
                <label className="w3-text-blue"><b>Duration of assignment</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.durationChange} value={props.duration}/>
                <label className="w3-text-blue"><b>Approx. Value of services (in Current US$):</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.approxValueChange} value={props.approxValue}/>
                {/* <label className="w3-text-blue"><b>No of Months of Professional Staff provided by Associated Consultants:</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.approxValueChange} value={props.approxValue}/> */}


        </div>
        <div className="w3-container project-content">
                <label className="w3-text-blue"><b>Name of senior staff (Project Director/Coordinator, Team Leader) involved and functions performed:</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={props.snr_staffChange} value={props.snr_staff}/>
                <label className="w3-text-blue"><b>Narrative description of Project:</b></label>
                <textarea className="w3-input w3-border"
                onChange={props.project_descChange} value={props.project_desc}/>
                <label className="w3-text-blue"><b>Description of actual services provided by your Staff:</b></label>
                <textarea className="w3-input w3-border"
                onChange={props.service_descChange} value={props.service_desc}/>
                <button className="w3-btn w3-blue project-button"
                onClick={props.clickNext}>Next</button>
        </div>
        
        </div>
        
    )
}
export default projectForm