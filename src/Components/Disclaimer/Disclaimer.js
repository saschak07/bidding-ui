import React from 'react'
import './Disclaimer.css'

const disclaimer = (props) => {
    return (
        <div className="w3-card w3-animate-zoom w3-white disclaimer-body">
            
            <div className="w3-container w3-white w3-cell disclaimer-content">
               <centre> <h2 className="code-header">CODE OF ETHICAL CONDUCT IN BUSINESS FOR BIDDERS AND PROVIDERS</h2></centre>
                <p>(Under Section 93 of the Public Procurement and Disposal of Public Assets Act, 2003)</p>
                <h3 className="code-header">1. Ethical Principles</h3>
                <p>Bidders and providers shall at all times-</p>
                        <p>(a) maintain integrity and independence in their professional judgement and conduct;</p>
                        <p>(b) comply with both the letter and the spirit of-</p>
                        <p>i. the laws of Uganda; and</p>
                        <p>ii. any contract awarded. </p>
                        <p>(c) avoid associations with businesses and organisations which are in conflict with this code. </p>
                <h3 className="code-header">2. Standards</h3>
                        <p>Bidders and providers shall-</p>
                        <p>(a) strive to provide works, services and supplies of high quality and accept full responsibility for all works, services or supplies provided;</p>
                        <p>(b) comply with the professional standards of their industry or of any professional body of which they are members.</p>
                <h3 className="code-header">3. Conflict of Interest</h3>
                        <p>Bidders and providers shall not accept contracts which would constitute a conflict 
                            of interest with, any prior or current contract with any procuring and disposing 
                            entity. Bidders and providers shall disclose to all concerned parties those 
                            conflicts of interest that cannot reasonably be avoided or escaped.</p>
                <h3 className="code-header">4. Confidentiality and Accuracy of Information</h3>
                        <p>(1) Information given by bidders and providers in the course of procurement processes 
                	or the performance of contracts shall be true, fair and not designed to mislead.</p>
                        <p>(2) Providers shall respect the confidentiality of 
                            information received in the course of 	performance of a contract and shall not use such information for personal gain.</p>    
                <h3 className="code-header">5. Gifts and Hospitality</h3>
                <p>Bidders and providers shall not offer gifts or hospitality directly or indirectly, to staff of a procuring and disposing entity that might be viewed by others as having an influence on a government procurement decision.</p>
                <h3 className="code-header">6. Inducements</h3>
                <p>	(1)Bidders and providers shall not offer or give anything of value to influence the 	action of a public official in the procurement process or in contract execution.</p>
                <p>(2)Bidders and providers shall not ask a public official to do anything which is 	inconsistent with the Act, Regulations, Guidelines or the Code of Ethical Conduct in 	Business.</p>
                <h3 className="code-header">7. Fraudulent Practices</h3>
                <p>Bidders and providers shall not-</p>
                <p>(a) collude with other businesses and organisations with the intention of depriving a procuring and disposing entity of the benefits of free and open competition;</p>
                <p>(b) enter into business arrangements that might prevent the effective operation of fair competition;</p>
                <p>(c) engage in deceptive financial practices, such as bribery, double billing or other improper financial practices;</p>
                <p>(d) misrepresent facts in order to influence a procurement process or the execution of a contract to the detriment of the Procuring and Disposing Entity; or utter false documents;</p>
                <p>(e) unlawfully obtain information relating to a procurement process in order to influence the process or execution of a contract to the detriment of the PDE;</p>
                <p>(f) withholding information from the PDE during contract execution to the detriment of the PDE.</p>
                <p></p>
                <input type="checkbox"></input><label className="w3-text-blue"><b> I hereby agree to comply with the above code of ethical conduct in business.</b></label>
                <br/>
                <br/>
                <label className="w3-text-blue"><b>Authorisor's Name:</b></label>
                <input className="w3-input w3-border" type="text"/>
                <label className="w3-text-blue"><b>Consulting organization:</b></label>
                <input className="w3-input w3-border" type="text"/>
                <button className="w3-btn w3-blue project-button"
                onClick={props.clickNext}>Next</button>
            </div>
            
        </div>
    )
}
export default disclaimer