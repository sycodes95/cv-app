import { Component } from "react";
import '../styles/cvContainer.css'
const CvContainer =(props)=> {
    
    return(
        <div className="cvContainer">
            <div className="personalWordContainer">
                <div id="pNameWord">First Last</div>
                <div id="pPhoneWord">213-420-6969</div>
                <div id="pEmailWord">yourmom69@gmail.com</div>
                <div id="pLocationWord">heaven, CA</div>
                <div id="pDescriptionWord">{props.pDescription}</div>
            </div>
            <div className="workWordContainer">
                <h1 className="workExperience">Work Experience</h1>
                <div id="wCompanyWord">Victorias Secret</div>
                <div id="wPositionWord">{props.wPosition}</div>
                <div id="wStartDateWord">{props.wStartDate}</div>
                <div id="wEndDateWord">{props.wEndDate}</div>
                <div id="wDescriptionWord">{props.wDescription}</div>

            </div>
            <div className="educationWordContainer">
                <div id="eCourseWord">{props.eCourse}</div>
                <div id="eUniversityWord">{props.eUniversity}</div>
                <div id="eStartDateWord">{props.eStartDate}</div>
                <div id="eEndDateWord">{props.eEndDate}</div>
                <div id="eDescriptionWord">{props.eDescription}</div>

            </div>

        </div>

    
        /*
        <div className="cvContainer">
            <div className="personalWordContainer">
                <div id="pNameWord">{this.props.pName}</div>
                <div id="pPhoneWord">{this.props.pPhone}</div>
                <div id="pEmailWord">{this.props.pEmail}</div>
                <div id="pLocationWord">{this.props.pLocation}</div>
                <div id="pDescriptionWord">{this.props.pDescription}</div>
            </div>
            <div className="workWordContainer">
                <div id="wCompanyWord">{this.props.wCompany}</div>
                <div id="wPositionWord">{this.props.wPosition}</div>
                <div id="wStartDateWord">{this.props.wStartDate}</div>
                <div id="wEndDateWord">{this.props.wEndDate}</div>
                <div id="wDescriptionWord">{this.props.wDescription}</div>

            </div>
            <div className="educationWordContainer">
                <div id="eCourseWord">{this.props.eCourse}</div>
                <div id="eUniversityWord">{this.props.eUniversity}</div>
                <div id="eStartDateWord">{this.props.eStartDate}</div>
                <div id="eEndDateWord">{this.props.eEndDate}</div>
                <div id="eDescriptionWord">{this.props.eDescription}</div>

            </div>

        </div>
        */
    
        
    )
    
}

export default CvContainer;