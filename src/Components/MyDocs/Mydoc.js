import React,{Component} from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from '../../axios'


const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      
      margin: 10,
      padding: 5,
      flexGrow: 1
    },
    header:{
      fontWeight: 'bold',
      textDecoration: 'underline',
      marginTop:'5%',
      marginLeft: '1%'
    },
    generic:{
      fontSize:'9',
      marginTop:'2%',
      marginBottom:'2%'
    },
    
  });
  
  // Create Document Component
  class MyDocument extends Component{
    // state={
    //   details:{}
    // }

    // componentWillMount(){
    //   console.log(this.props.org)
    //   axios.get('/docService/contractor/'+this.props.org)
    //   .then(response =>{
    //     const updatedDetails = response.data
    //     this.setState({details:updatedDetails})
    //     console.log(this.state.details.address)
    //   })
    //   .catch(error=>{
    //     console.log(error);
    //   })
    // }

    render(){
      console.log('address'+this.props.address)
      return(<Document>
        <Page size="A4" style={styles.page}>
          
          <View style={styles.section}>
          <Text style={styles.header}>Petroleum Authority of Uganda (PAU)</Text>
          <Text>{"\n"}</Text>
            <Text style={styles.generic}>Contractor's Name: {this.props.org}</Text>
            <Text style={styles.generic}>Contractor's Address: {this.props.address}</Text>
            <Text style={styles.header}>Past project history</Text>
            <Text style={styles.generic}>Assignment name: {this.props.assignmentName}</Text>
            <Text style={styles.generic}>Location within country: {this.props.location}</Text>
            <Text style={styles.generic}>Name of client: {this.props.clientName}</Text>
            <Text style={styles.generic}>Start date: {this.props.startDate}</Text>
            <Text style={styles.generic}>Approx. Value of services (in Current US$): {this.props.approxValue}</Text>
            <Text style={styles.generic}>Name of senior staff (Project Director/Coordinator, {"\n"}Team Leader) involved and functions performed:{this.props.snr_staff}</Text>
          <Text style={styles.generic}>Narrative description of Project:{this.props.project_desc}</Text>
          <Text style={styles.header}>Disclaimers</Text>
          <Text style={styles.generic}>    1. Ethical Principles{"\n"}
	Bidders and providers shall at all times-{"\n"}
    (a) maintain integrity and independence in their{"\n"} professional judgement and conduct;{"\n"}
    (b) comply with both the letter and the spirit of-{"\n"}
    i. the laws of Uganda; and{"\n"}
    ii. any contract awarded. {"\n"}
    (c) avoid associations with businesses {"\n"}and organisations which are in conflict with this code. </Text>
    <Text style={styles.generic}> 2. Standards{"\n"}
	Bidders and providers shall-{"\n"}
    (a) strive to provide works, services and supplies of high quality {"\n"}and accept full responsibility for all works,{"\n"} services or supplies provided;
    {"\n"} (b) comply with the professional standards of their industry or{"\n"} of any professional{"\n"} body of which they are members. </Text>
    <Text style={styles.generic}>    4. Confidentiality and Accuracy of Information{"\n"}
	(1) Information given by bidders and providers{"\n"} in the course of procurement processes 	or the performance of contracts shall be true,{"\n"} fair and not designed to mislead.{"\n"}
	(2) Providers shall respect the confidentiality of information{"\n"} received in the course of 	performance of a contract {"\n"}and shall not use such information for personal gain.  </Text>
    
          </View>
          <View style={styles.section}>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.generic}>Country: {this.props.country}</Text>
            <Text style={styles.generic}>Professional Staff provided by consultant (profiles): {this.props.staff}</Text>
            <Text style={styles.generic}>No. of Staffs: {this.props.noOfStaff}</Text>
            <Text style={styles.generic}>Completion date: {this.props.completionDate}</Text>
          </View>
         
          
        </Page>
      </Document>)
    }
  }
  
  
  
  export default MyDocument;
  