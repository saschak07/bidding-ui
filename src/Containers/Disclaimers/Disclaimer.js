import React , {Component} from 'react'

class Disclaimer extends Component{
    render(){
        return (
            <div>
                <h1 style={{color:'white', 
                         marginLeft:'2%',
                        textDecoration:'underline'}}>
                    {this.props.match.params.org}</h1>
                    <p style={{color:'white',marginLeft:'2%'}}>
                    Please acknowledge the following terms and conditions to move next 
                    </p>
                    <Statusbar page='disclaimers'/>

            </div>
        )
    }
}

export default Disclaimer;