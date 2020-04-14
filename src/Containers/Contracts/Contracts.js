import React , {Component} from 'react'
import Contractdetails from '../../Components/ContractsDetails/ContractDetails'
import './Contracts.css'

class Contracts extends Component{
    state = {
        cotractList : [
            {
                id:1,
                companyName:'Petroleum Authority of Uganda (PAU)',
                subject: 'Consultancy Services to develop a Joint Qualification System for the National Supplier Database (NSD)',
                dateOfIssue:'1st May, 2020',
                PRN:'PAU/CONS/19-20/00125-TSS'
            },
            {
                id:2,
                companyName:'ABC Organization',
                subject: 'Consultancy Services for system design',
                dateOfIssue:'1st May, 2020',
                PRN:'PAU/CONS/19-20/00128-TSS'
            }
        ]
    }
    handleClick = (org) =>{
        this.props.history.push('/profile/'+org)
    }

    render(){
        const contracts = this.state.cotractList.map(data => {
            return (
                <Contractdetails key={data.id}
                companyName={data.companyName}
                subject={data.subject}
                dateOfIssue={data.dateOfIssue}
                PRN={data.PRN}
                clicked={(event) => this.handleClick(data.companyName)}
                />
            )
        })
        return (<div>
            <h1 className="w3-animate-top text"
            style={{color:'white'}}
            >New Tenders</h1>
                {contracts}
        </div>)
    }
}

export default Contracts;