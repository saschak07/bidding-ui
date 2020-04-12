import React , {Component} from 'react'
import Statusbar from '../../Components/Status-bar/Status-bar'
import DisclaimerDetails from '../../Components/Disclaimer/Disclaimer'
class Disclaimer extends Component{
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
                    <DisclaimerDetails/>

            </div>
        )
    }
}

export default Disclaimer;