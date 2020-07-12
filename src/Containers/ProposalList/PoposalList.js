import React , {Component} from 'react'
import Proposal from '../../Components/Proposal/Proposal'
import axios from '../../axios'
class ProposalList extends Component{
    state = {
        proposals : []
    }

    componentDidMount() {
        axios.get('/docService/contractors')
        .then(respone => {
            this.setState({proposals:respone.data})
        })
        .catch(error => console.log(error))
    }

    handleRemove = async (contractorId) =>{
        try{
        await axios.delete('/docService/contractors/'+ contractorId)
        const updatedProposalsList = this.state.proposals.filter(data=>data.contractorId!==contractorId)
        this.setState({proposals:updatedProposalsList})
        }
        catch(error){
            alert('could not remove the entry due to server issues! contact support')
        }
        
    }

    render(){
        const proposalList = this.state.proposals.map(data => <Proposal
        key = {data.contractorId}
        name = {data.name}
        bidding_for_client = {data.bidding_for_client}
        contractorId = {data.contractorId}
        remove={(event)=>this.handleRemove(data.contractorId)}/>)
        return(<div>
                {proposalList}
        </div>)
    }
}

export default ProposalList