import React , {Component} from 'react'
import './PastProjects.css'
import {v4 as uuidv4} from 'uuid'
import Statusbar from '../../Components/Status-bar/Status-bar'
import ProjectForm from '../../Components/ProjectForm/ProjectForm'

class PastProjects extends Component{
    state = {
        ProjectList: [
            {
                projectId:uuidv4(),
                assignmentName:null,
                country:null,
                location:null,
                staff:null,
                clientName:null,
                noOfStaff:null,
                duration:null,
                startDate:null,
                completionDate:null,
                approxValue:null,
                associateConsultant:null,
                associationTime:null,
                snr_staff:null,
                project_desc:null,
                service_desc:null


            }
        ]
    }

    handleClickNext = (org) =>{
        this.props.history.push('/disclaimers/'+org)
    }
   

    render(){
        const projectForms = <ProjectForm clickNext={(event)=>this.handleClickNext(this.props.match.params.org)}/>
        
        return(<div>
                    <h1 style={{color:'white', 
                         marginLeft:'2%',
                        textDecoration:'underline'}}>
                    {this.props.match.params.org}</h1>
                    <p style={{color:'white',marginLeft:'2%'}}>
                    Intsert details for all the fields and click next to complete proposal
                    </p>
                    <Statusbar page='pastProject'/>
                    {projectForms}
             </div>
           )
    }
}

export default PastProjects;