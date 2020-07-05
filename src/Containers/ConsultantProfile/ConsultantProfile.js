import React , {Component} from 'react'
import './ConsultantProfile.css'
import Statusbar from '../../Components/Status-bar/Status-bar'
import { connect } from 'react-redux';
import * as actionType from '../Store/action'
class ConsultantProfile extends Component{

    state={
        profile:{
            name:null,
            address:null,
            bidding_for_client:null
        }
    }

    handleNextButton =(org) =>{
        console.log(this.state.profile)
        const updatedProfile = this.state.profile
        updatedProfile.bidding_for_client = this.props.match.params.org
        this.setState({profile:updatedProfile})
        // axios.post('/docService/contractor',this.state.profile)
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        this.props.loadContractorName(this.state.profile)
        this.props.history.push('/past-projects/'+org)
    }

    handleNameChange =(event) =>{
        const updatedProfile = this.state.profile
        updatedProfile.name=event.target.value;
        this.setState({profile:updatedProfile})
    }

    handleAddressChange= (event) => {
        const updatedProfile = this.state.profile
        updatedProfile.address=event.target.value;
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
                onChange={this.handleNameChange} value={this.state.profile.name}/>
                
                <label className="w3-text-blue"><b>Address</b></label>
                <textarea className="w3-input w3-border" 
                 onChange={this.handleAddressChange} value={this.state.profile.address}/>

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