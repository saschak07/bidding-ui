import React , {Component} from 'react'
import './PastProjects.css'
import {v4 as uuidv4} from 'uuid'
import Statusbar from '../../Components/Status-bar/Status-bar'
import ProjectForm from '../../Components/ProjectForm/ProjectForm'
import { connect } from 'react-redux';
import * as actionType from '../Store/action'
import axios from '../../axios'

class PastProjects extends Component{
    state ={
        details: {
        name:null,
        address:null,
        experince: 
            {
                projectId:uuidv4(),
                assignmentName:null,
                name:null,
                address:null,
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
        
    }
}
componentDidMount(){
    const updatedInfo = this.state.details;
    updatedInfo.name = this.props.details.name;
    updatedInfo.address = this.props.details.address;
    this.setState({details:updatedInfo})
}

    handleaddressChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.address = event.target.value;
        this.setState({details:updatedInfo})
    }

    handleassignmentNameChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.assignmentName = event.target.value;
        this.setState({details:updatedInfo})
    }
    handlecountryChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.country = event.target.value;
        this.setState({details:updatedInfo})
    }
    handlelocationChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.location = event.target.value;
        this.setState({details:updatedInfo})
    }
    handlestaffChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.staff = event.target.value;
        this.setState({details:updatedInfo})
    }
    handleclientNameChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.clientName = event.target.value;
        this.setState({details:updatedInfo})
    }
    handlenoOfStaffChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.noOfStaff = event.target.value;
        this.setState({details:updatedInfo})
    }
    handledurationChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.duration = event.target.value;
        this.setState({details:updatedInfo})
    }
    handlestartDateChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.startDate = event.target.value;
        this.setState({details:updatedInfo})
    }
    handlecompletionDateChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.completionDate = event.target.value;
        this.setState({details:updatedInfo})
    }
    handleapproxValueChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.approxValue = event.target.value;
        this.setState({details:updatedInfo})
    }
    handleassociateConsultantChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.associateConsultant = event.target.value;
        this.setState({details:updatedInfo})
    }
    handleassociationTimeChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.associationTime = event.target.value;
        this.setState({details:updatedInfo})
    }
    handlesnr_staffChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.snr_staff = event.target.value;
        this.setState({details:updatedInfo})
    }
    handleproject_descChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.project_desc = event.target.value;
        this.setState({details:updatedInfo})
    }
    handleservice_descChange =(event) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince.service_desc = event.target.value;
        this.setState({details:updatedInfo})
    }

    handleClickNext = (org) =>{
        console.log('name from redux:'+this.props.details)
        // const updatedInfo = this.state.details;
        // updatedInfo.name = this.props.name
        // this.setState({details:updatedInfo})
        console.log(this.state)
        axios.post('/docService/contractor',this.state.details)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        this.props.loadContractorName(this.state.details)
        this.props.history.push('/disclaimers/'+org)
    }
   

    render(){
        const projectForms = <ProjectForm 
        clickNext={(event)=>this.handleClickNext(this.props.match.params.org)}
                assignmentNameChange={this.handleassignmentNameChange}
                addressChange={this.handleaddressChange}
                countryChange={this.handlecountryChange}
                locationChange={this.handlelocationChange}
                staffChange={this.handlestaffChange}
                clientNameChange={this.handleclientNameChange}
                noOfStaffChange={this.handlenoOfStaffChange}
                durationChange={this.handledurationChange}
                startDateChange={this.handlestartDateChange}
                completionDateChang={this.handlecompletionDateChange}
                approxValueChange={this.handleapproxValueChange}
                associateConsultantChange={this.handleassociateConsultantChange}
                associationTimeChange={this.handleassociationTimeChange}
                snr_staffChange={this.handlesnr_staffChange}
                project_descChange={this.handleproject_descChange}
                service_descChange={this.handleservice_descChange}
                assignmentName={this.state.details.assignmentName}
                country={this.state.details.country}
                location={this.state.details.location}
                staff={this.state.details.staff}
                clientName={this.state.details.clientName}
                noOfStaff={this.state.details.noOfStaff}
                duration={this.state.details.duration}
                startDate={this.state.details.startDate}
                completionDate={this.state.details.completionDate}
                approxValue={this.state.details.approxValue}
                associateConsultant={this.state.details.associateConsultant}
                associationTime={this.state.details.associationTime}
                snr_staff={this.state.details.snr_staff}
                project_desc={this.state.details.project_desc}
                service_desc={this.state.details.service_desc}
                address={this.state.details.address}/>
        
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

const mapStateToProps = state => {
    return {
        details: state.contractorDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadContractorName: (details) => dispatch({type: actionType.SET_NAME,details }),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PastProjects);