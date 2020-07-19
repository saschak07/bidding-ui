import React,{Component} from 'react'
import './TemplateUpdate.css'
import axios from '../../axios';

class TempletUpdate extends Component{

    state = {
        selectedFile: null,
        selectedOrg: null
    }

    handleSelect = (event) => {
        this.setState({selectedOrg : event.target.value});
    }

    handlefileChange = (event) => {
        this.setState({selectedFile : event.target.files[0]});
    }

    handleUpload = () => {
        const form = new FormData();
        form.append("file",this.state.selectedFile,this.state.selectedFile.name)
        axios.post("/docService/tenderer/uploadFile/"+this.state.selectedOrg
        ,form)
        .then(response =>{
            alert("file has been successfully uploaded!")
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidUpdate(){
        console.log("state:"+this.state.selectedOrg)
    }

    render(){
      return (
          <div>
        <h1 style={{color:'white', 
        marginLeft:'2%',
        textDecoration:'underline'}}>
        Upload template for proposal</h1>
        <p style={{color:'white',marginLeft:'2%'}}>
        Intsert details for all the fields and click upload (uploaded file name should be template.docx)
        </p>
        <div className="w3-card w3-animate-zoom w3-white profile-body">
         <div className="w3-container profile-content">
         <label className="w3-text-blue"><b>Select Organzation name</b></label><br/>
         <select onChange={(event) =>this.handleSelect(event)}>
             <option>--select--</option>
             <option value="Petroleum Authority of Utopia (PAU)">Petroleum Authority of Utopia (PAU)</option>
             <option value="ABC Organization">ABC Organization</option>
         </select><br/><br/>
         <label className="w3-text-blue"><b>upload template file here</b></label><br/>
         <input type="file" onChange={(event => this.handlefileChange(event))}/><br/><br/>
         <button className="w3-btn w3-blue "
                onClick={(event) => 
                this.handleUpload()}>Upload</button>
        </div>
        </div>
        </div>)
    }
}

export default TempletUpdate