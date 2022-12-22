import { Component } from "react";

class FormContainer extends Component{
    constructor(){
        super()
        this.state = {
            pName: '',
            pTitle: '',
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
            <div className="formContainer">
                <div className="personalFormContainer">
                    <h3 className="personalFormHeader">Personal Details</h3>
                    <input type="text" placeholder="Name" id="pName" onKeyDown={this.handleEnter}/>
                    <input type="email" placeholder="Email" id="pEmail" onKeyDown={this.handleEnter}/>
                    <input type="tel" placeholder="Phone" id="pPhone" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="Location" id="pLocation" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="Description" id="pDescription" onKeyDown={this.handleEnter}/>

                    
                </div>
                <div className="workFormContainer">
                    <h3 className="workFormHeader">Work Experience</h3>
                    <input type="text" placeholder="Company Name" id="cName" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="Position" id="cPosition" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="Start Date" id="cStart" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="Start Date" id="cStart" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="Start Date" id="cStart" onKeyDown={this.handleEnter}/>
                </div>
                <div className="educationFormContainer">
                    <h3 className="educationFormHeader">Education</h3>
                    <input type="text" placeholder="Course / Program / University" id="eName" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="Start Date" id="eStart" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="End Date" id="eEnd" onKeyDown={this.handleEnter}/>
                    <input type="text" placeholder="Description" id="eDescription" onKeyDown={this.handleEnter}/>

                </div>
            </div>
        )
          
    }
}

export default FormContainer;