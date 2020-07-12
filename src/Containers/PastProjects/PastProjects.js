import React , {Component} from 'react'
import './PastProjects.css'
import Statusbar from '../../Components/Status-bar/Status-bar'
import ProjectForm from '../../Components/ProjectForm/ProjectForm'
import { connect } from 'react-redux';
import * as actionType from '../Store/action'
import axios from '../../axios'

class PastProjects extends Component{
    state ={
        details: {
        experince: 
            {}
        }
}
componentDidMount(){
    console.log(this.props.details)
    const updatedInfo = this.state.details;
    updatedInfo.name = this.props.details.name;
    updatedInfo.address = this.props.details.address;
    updatedInfo.bidding_for_client = this.props.details.bidding_for_client;
    updatedInfo.emailId = this.props.details.emailId;
    this.setState({details:updatedInfo})
}

    handleFieldUpdate =(event,pros_attribute) =>{
        const updatedInfo = this.state.details;
        updatedInfo.experince[pros_attribute]= event.target.value;
        this.setState({details:updatedInfo})
    }

    handleClickNext = async (org) =>{
        console.log('name from redux:'+this.props.details)
        console.log(this.state)
       try{
        const response = await axios.post('/docService/contractor',this.state.details)
        console.log('past-exp-submitted'+response.data)
        this.props.loadContractorName(response.data)
        this.props.history.push('/disclaimers/'+org)
       } 
        catch(error) {
            console.log(error)
            alert('Details could not be loaded due to server issues!! contact support')
            this.props.history.push('/')
        }
        
    }
   

    render(){
        const projectForms = <ProjectForm 
        clickNext={(event)=>this.handleClickNext(this.props.match.params.org)}
                fieldChange={this.handleFieldUpdate}
                projectDetails={this.state.details.experince}
                />
        
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