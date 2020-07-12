import React,{Component} from 'react'
import './InsertIdea.css'
import Statusbar from '../../Components/Status-bar/Status-bar'
import { connect } from 'react-redux';
import axios from '../../axios'
import * as actionType from '../Store/action'

class InsertIdea extends Component{

    state = {
        selectedFile : null,
        contractorId : null
    }

    handlefileChange = (event) => {
        this.setState({selectedFile : event.target.files[0]});
    }

    handleUpload = () => {
        const form = new FormData();
        form.append("file",this.state.selectedFile,this.state.selectedFile.name)
        axios.post("/docService/contractor/uploadFile/"+this.state.contractorId
        ,form)
        .then(response =>{
            alert("file has been successfully uploaded!")
        })
        .catch(error => {
            console.log(error)
        })
        this.props.history.push('/donwloader/'+this.props.match.params.org)
    }

    componentDidMount() {
        console.log(this.props.details)
        this.setState({contractorId : this.props.details.contractorId})
    }

    render(){
        const uplaodBox = this.state.contractorId?
        <div>
        <h1 style={{color:'white', 
       marginLeft:'2%',
       textDecoration:'underline'}}>
       {this.props.match.params.org}</h1>
       <p style={{color:'white',marginLeft:'2%'}}>
       Upload the implementation related documents here and click next to proceed!
       </p>
       <Statusbar page='finalSubmission'/>
   <div className="w3-card w3-animate-zoom w3-white profile-body">
<div className="w3-container idea-content">
<label className="w3-text-blue"><b>upload attachment here! (file with .docx extension)</b></label><br/>
<input type="file" onChange={(event => this.handlefileChange(event))}/><br/><br/>
<button className="w3-btn w3-blue "
       onClick={(event) => 
       this.handleUpload()}>Next</button>
       </div>
</div>
   </div>:<div style={{color : 'white'}}>loading...</div>
        return(
            <div>
               {uplaodBox}
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
export default connect(mapStateToProps,mapDispatchToProps)(InsertIdea)