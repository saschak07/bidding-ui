import React from 'react'
import './Status-bar.css'

const statusBar =(props) =>{
    const profilestyle = props.page==='profile'?{
        color:'yellow',
        fontWeight:'bold'
    }:{color:'black'};
    const pastProject = props.page==='pastProject'?{
        color:'yellow',
        fontWeight:'bold'
    }:{color:'black'};
    const preview = props.page==='preview'?{
        color:'yellow',
        fontWeight:'bold'
    }:{color:'black'};
    const disclaimers = props.page==='disclaimers'?{
        color:'yellow',
        fontWeight:'bold'
    }:{color:'black'};
    const finalSubmission = props.page==='finalSubmission'?{
        color:'yellow',
        fontWeight:'bold'
    }:{color:'black'};
    
    return (
        <div className="status-container">
        <div className="w3-container w3-blue w3-cell ">
        <p style={profilestyle}>Profile submission  ></p>
        </div>
      
        <div className="w3-container w3-blue w3-cell">
            <p style={pastProject}> Past Projects  ></p>
        </div> 
        <div className="w3-container w3-blue w3-cell">
            <p style={disclaimers}> Disclaimers  ></p>
        </div>
        <div className="w3-container w3-blue w3-cell">
            <p style={preview}> Preview  ></p>
        </div>
        <div className="w3-container w3-blue w3-cell">
            <p style={finalSubmission}> Final Submission </p>
        </div>
      </div>
    )
}

export default statusBar;