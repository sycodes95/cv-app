import { Component, useState } from "react";
import CvContainer from "./cvContainer"
import '../styles/formContainer.css';
const FormContainer = () =>{
    const [state, setState] = useState({
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
        
    })
        
    const handleEnter = (event) =>{
        if(event.keyCode === 13){
            const {id,value} = event.target;
            setState({...state, [id]: value})
        }

    }
    
    return(
        <div className="Container">
            <div className="formContainer">
                <div className="personalFormContainer">
                    <h3 className="personalFormHeader">Personal Details</h3>
                    <input type="text" placeholder="Name" className="input" id="pName" onKeyDown={handleEnter}/>
                    <input type="email" placeholder="Email" className="input" id="pEmail" onKeyDown={handleEnter}/>
                    <input type="tel" placeholder="Phone" className="input" id="pPhone" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="Location" className="input" id="pLocation" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="Description" className="input" id="pDescription" onKeyDown={handleEnter}/>
                    
                    

                </div>
                <div className="workFormContainer">
                    <h3 className="workFormHeader">Work Experience</h3>
                    <input type="text" placeholder="Company Name" className="input" id="wCompany" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="Position" className="input" id="wPosition" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="Start Date" className="input" id="wStartDate" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="End Date" className="input" id="wEndDate" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="Description" className="input" id="wDescription" onKeyDown={handleEnter}/>
                    
                </div>
                <div className="educationFormContainer">
                    <h3 className="educationFormHeader">Education</h3>
                    <input type="text" placeholder="Course / Program / University" className="input" id="eName" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="Start Date" className="input" id="eStart" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="End Date" className="input" id="eEnd" onKeyDown={handleEnter}/>
                    <input type="text" placeholder="Description" className="input" id="eDescription" onKeyDown={handleEnter}/>
                    

                </div>
            </div>
            <CvContainer pName={state.pName} pEmail={state.pEmail} pPhone={state.pPhone} 
            pLocation={state.pLocation} pDescription={state.pDescription} 
            wCompany={state.wCompany} wPosition={state.wPosition} wStartDate={state.wStartDate}
            wEndDate={state.wEndDate} wDescription={state.wDescription}
            eName={state.eName} eStart={state.eStart} eEnd={state.eEnd}
            eDescription={state.eDescription}/>


        </div>
        
    )
          
    
}

export default FormContainer;