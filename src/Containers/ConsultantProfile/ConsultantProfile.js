import React , {Component} from 'react'
import './ConsultantProfile.css'
import Statusbar from '../../Components/Status-bar/Status-bar'
class ConsultantProfile extends Component{

    handleNextButton =(org) =>{
        this.props.history.push('/past-projects/'+org)
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
                <input className="w3-input w3-border" type="text"/>
                
                <label className="w3-text-blue"><b>Address</b></label>
                <textarea className="w3-input w3-border" />

                <button className="w3-btn w3-blue profile-button"
                onClick={(event) => 
                this.handleNextButton(this.props.match.params.org)}>Next</button>
 
        </div> 
        </div>
        </div>
        )
    }
}

export default ConsultantProfile;