import React, {Component} from 'react'
import MyDoc from '../../Components/MyDocs/Mydoc'
import { PDFViewer } from '@react-pdf/renderer';
import './PDFViewer.css'
import axios from '../../axios'
class PDFViwer extends Component{
    
    state={
        details:{}
      }
  
      componentWillMount(){
        //console.log(this.props.org)
        axios.get('/docService/contractor/'+this.props.match.params.name)
        .then(response =>{
          const updatedDetails = response.data
          this.setState({details:updatedDetails})
          console.log(this.state.details)
        })
        .catch(error=>{
          console.log(error);
        })
      }
      
    
    render(){
        const pdfRender = typeof(this.state.details.address)==="undefined"?<div
        style={{color:'white'}}>
            Loading.....
        </div>:<PDFViewer className="container">
                <MyDoc org={this.props.match.params.name}
                address={this.state.details.address}
                assignmentName={this.state.details.experince.assignmentName}
                location={this.state.details.experince.location}
                clientName={this.state.details.experince.clientName}
                startDate={this.state.details.experince.startDate}
                country={this.state.details.experince.country}
                staff={this.state.details.experince.staff}
                noOfStaff={this.state.details.experince.noOfStaff}
                completionDate={this.state.details.experince.completionDate}
                approxValue={this.state.details.experince.approxValue}
                snr_staff={this.state.details.experince.snr_staff}
                project_desc={this.state.details.experince.project_desc}
                service_desc={this.state.details.experince.service_desc}
                />
            </PDFViewer>
        return(
            <div>
                {pdfRender}
            </div>
        )
    }
}

export default PDFViwer