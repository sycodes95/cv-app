import { Component } from "react";
import CvContainer from "./cvContainer"
import '../styles/formContainer.css';
class FormContainer extends Component{
    constructor(){
        super()
        this.state = {
            pName: '',
            pPhone: '',
            pEmail: '',
            pLocation: '',
            pDescription: '',
            
            wCompany: '',
            wPosition: '',
            wStartDate: '',
            wEndDate: '',
            wDescription: '',

            eCourse: '',
            eUniversity: '',
            eStartDate: '',
            eEndDate: '',
            eDescription: ''


        }
    }
    handleEnter = (event) =>{
        if(event.keyCode === 13){
            const {id,value} = event.target;
            this.setState({[id]: value})
        }

    }
    render(){
        return(
            <div className="Container">
                <div className="formContainer">
                    <div className="personalFormContainer">
                        <h3 className="personalFormHeader">Personal Details</h3>
                        <input type="text" placeholder="Name" className="input" id="pName" onKeyDown={this.handleEnter}/>
                        <input type="email" placeholder="Email" className="input" id="pEmail" onKeyDown={this.handleEnter}/>
                        <input type="tel" placeholder="Phone" className="input" id="pPhone" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="Location" className="input" id="pLocation" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="Description" className="input" id="pDescription" onKeyDown={this.handleEnter}/>
                        
                        

                    </div>
                    <div className="workFormContainer">
                        <h3 className="workFormHeader">Work Experience</h3>
                        <input type="text" placeholder="Company Name" className="input" id="wCompany" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="Position" className="input" id="wPosition" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="Start Date" className="input" id="wStartDate" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="End Date" className="input" id="wEndDate" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="Description" className="input" id="wDescription" onKeyDown={this.handleEnter}/>
                        
                    </div>
                    <div className="educationFormContainer">
                        <h3 className="educationFormHeader">Education</h3>
                        <input type="text" placeholder="Course / Program / University" className="input" id="eName" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="Start Date" className="input" id="eStart" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="End Date" className="input" id="eEnd" onKeyDown={this.handleEnter}/>
                        <input type="text" placeholder="Description" className="input" id="eDescription" onKeyDown={this.handleEnter}/>
                        

                    </div>
                </div>
                <CvContainer pName={this.state.pName} pEmail={this.state.pEmail} pPhone={this.state.pPhone} 
                pLocation={this.state.pLocation} pDescription={this.state.pDescription} 
                wCompany={this.state.wCompany} wPosition={this.state.wPosition} wStartDate={this.state.wStartDate}
                wEndDate={this.state.wEndDate} wDescription={this.state.wDescription}
                eName={this.state.eName} eStart={this.state.eStart} eEnd={this.state.eEnd}
                eDescription={this.state.eDescription}/>


            </div>
            
        )
          
    }
}

export default FormContainer;