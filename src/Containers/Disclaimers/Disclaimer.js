import React , {Component} from 'react'
import Statusbar from '../../Components/Status-bar/Status-bar'
import DisclaimerDetails from '../../Components/Disclaimer/Disclaimer'
import { connect } from 'react-redux';

class Disclaimer extends Component{

    handleNext  =(org) =>{
        console.log('disclaimer:'+this.props.details.name);
        this.props.history.push('/insert-idea/'+org)
    }

    render(){
        return (
            <div>
                <h1 style={{color:'white', 
                         marginLeft:'2%',
                        textDecoration:'underline'}}>
                    {this.props.match.params.org}</h1>
                    <p style={{color:'white',marginLeft:'2%'}}>
                    Please read through and acknowledge the following terms and conditions to move next 
                    </p>
                    <Statusbar page='disclaimers'/>
                    <DisclaimerDetails clickNext={(event)=>this.handleNext(this.props.match.params.org)}/>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        details: state.contractorDetails
    };
};

export default connect(mapStateToProps)(Disclaimer);