import React from 'react'
import './ProjectForm.css'
import * as ProjectAttributes from './ProjectAttributes'
const projectForm = (props) => {
    return(
            <div className="w3-card w3-animate-zoom w3-white project-body" data-testid="project-form">
         <div className="w3-container w3-white w3-cell project-content">

                <label className="w3-text-blue"><b>Assignment name</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.ASSIGNMENT_NAME)} value={props.projectDetails.assignmentName}/>
                
                <label className="w3-text-blue"><b>Location within country</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.LOCATION)} value={props.projectDetails.location}/>

                <label className="w3-text-blue"><b>Name of client</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.CLIENT_NAME)} value={props.projectDetails.clientName}/>
                <label className="w3-text-blue"><b>Address</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.ADDRESS)} value={props.projectDetails.address}/>
                <label className="w3-text-blue"><b>Start date</b></label>

                <input className="w3-input w3-border" type="date"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.START_DATE)} value={props.projectDetails.startDate}/>
                <label className="w3-text-blue"><b>Completion date</b></label>
                <input className="w3-input w3-border" type="date"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.COMPLETIION_DATE)} value={props.projectDetails.completionDate}/>
                <label className="w3-text-blue"><b>Name of Associated Consultants, if any</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.ASSOCIATE_CONSULTANT)} value={props.projectDetails.associateConsultant}/>
 
        </div> 
        <div className="w3-container w3-white w3-cell project-content">
                <label className="w3-text-blue"><b>Country</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.COUNTRY)} value={props.projectDetails.country}/>

                <label className="w3-text-blue"><b>Professional Staff provided by consultant (profiles)</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.STAFF)} value={props.projectDetails.staff}/>

                <label className="w3-text-blue"><b>No. of Staffs</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.NO_OF_STAFF)} value={props.projectDetails.noOfStaff}/>
                <label className="w3-text-blue"><b>Duration of assignment</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.DURATION)} value={props.projectDetails.duration}/>
                <label className="w3-text-blue"><b>Approx. Value of services (in Current US$):</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.APPROX_VALUE)} value={props.projectDetails.approxValue}/>


        </div>
        <div className="w3-container project-content">
                <label className="w3-text-blue"><b>Name of senior staff (Project Director/Coordinator, Team Leader) involved and functions performed:</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.SNR_STAFF)} value={props.projectDetails.snr_staff}/>
                <label className="w3-text-blue"><b>Narrative description of Project:</b></label>
                <textarea className="w3-input w3-border"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.PROJECT_DESC)} value={props.projectDetails.project_desc}/>
                <label className="w3-text-blue"><b>Description of actual services provided by your Staff:</b></label>
                <textarea className="w3-input w3-border"
                onChange={(event)=>props.fieldChange(event,ProjectAttributes.SERVICE_DESC)} value={props.projectDetails.service_desc}/>
                <button className="w3-btn w3-blue project-button"
                onClick={props.clickNext}>Next</button>
        </div>
        
        </div>
        
    )
}
export default projectForm