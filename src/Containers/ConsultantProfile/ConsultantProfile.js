import React , {Component} from 'react'
import './ConsultantProfile.css'
import Statusbar from '../../Components/Status-bar/Status-bar'
import { connect } from 'react-redux';
import * as actionType from '../Store/action'
import * as profileAttributes from './ProfileFields'
class ConsultantProfile extends Component{

    state={
        profile:{
        }
    }

    handleNextButton =(org) =>{
        console.log(this.state.profile)
        const updatedProfile = this.state.profile
        updatedProfile.bidding_for_client = this.props.match.params.org
        this.setState({profile:updatedProfile})
        this.props.loadContractorName(this.state.profile)
        this.props.history.push('/past-projects/'+org)
    }

    handleFieldChange(event,attribute){
        const updatedProfile = this.state.profile
        updatedProfile[attribute] = event.target.value
        this.setState({profile:updatedProfile})
    }

    render(){
        return (
            <div>
                <h1 style={{color:'white', 
                marginLeft:'2%',
                textDecoration:'underline'}}>
                {this.props.match.params.org}</h1>
                <p style={{color:'white',marginLeft:'2%'}}>
                Intsert details for all the fields and click next to complete proposal
                </p>
            <Statusbar page='profile'/>
            <div className="w3-card w3-animate-zoom w3-white profile-body">
         <div className="w3-container profile-content">

                <label className="w3-text-blue"><b>Consultant's Name</b></label>
                <input className="w3-input w3-border" type="text"
                onChange={(event)=>this.handleFieldChange(event,profileAttributes.NAME)} value={this.state.profile.name}/>
                
                <label className="w3-text-blue"><b>Address</b></label>
                <textarea className="w3-input w3-border" 
                 onChange={(event)=>this.handleFieldChange(event,profileAttributes.ADDRESS)} value={this.state.profile.address}/>

                <label className="w3-text-blue"><b>Email</b></label>
                <input className="w3-input w3-border" 
                 onChange={(event)=>this.handleFieldChange(event,profileAttributes.EMAIL_ID)} value={this.state.profile.emailId}/>

                <button className="w3-btn w3-blue profile-button"
                onClick={(event) => 
                this.handleNextButton(this.props.match.params.org)}>Next</button>
 
        </div> 
        </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(ConsultantProfile);