import React,{Component} from 'react'
import { connect } from 'react-redux';
import * as actionType from '../Store/action'
import Statusbar from '../../Components/Status-bar/Status-bar'

export class BidDownloader extends Component{
    state = {
        contractorId : null
    }
    componentDidMount() {
        this.setState({contractorId : this.props.details.contractorId})
    }
    render(){
        const uplaodBox = this.state.contractorId?
        <div data-testid='biddowlnloader'>
        <h1 style={{color:'white', 
       marginLeft:'2%',
       textDecoration:'underline'}}>
       {this.props.match.params.org}</h1>
       <p style={{color:'white',marginLeft:'2%'}}>
       
       </p>
       <Statusbar page='finalSubmission'/>
   <div className="w3-card w3-animate-zoom w3-white profile-body">
<div className="w3-container idea-content">
<label className="w3-text-blue"><b>Bid documnet is ready, to view in details click download</b></label><br/>
<br/><br/>
 <a href={"https://bidding-service.herokuapp.com/docService/contractor/getFile/"+this.state.contractorId}><button className="w3-btn w3-blue ">Download ...</button></a>
       </div>
</div>
   </div>:<div style={{color : 'white'}}>loading...</div>
        return(<div>{uplaodBox}</div>)
    }
}

const mapStateToProps = state => {
    return {
        details: state.contractorDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadcontractorId: (details) => dispatch({type: actionType.SET_NAME,details }),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BidDownloader)