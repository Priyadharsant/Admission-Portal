import PersonalDetails from "./PersonalDetails";
import BasicDetails from './BasicDetails';
import { Routes, Route } from "react-router-dom";
import React,{useState} from "react";   
import ProgressBar from "./ProgressBar";
import ParentsDetails from "./ParentsDetails";
import GuardianDetails from "./GuardianDetails";
import AddressDetails from "./AddressDetails";
import AcademicDetails from "./AcademicDetails";
import UploadDetails from "./UploadDetails";
function UserApplicationDetails() {
    
    return(
        <>
        <ProgressBar/>
        <Routes>
        <Route step="1" path="/" element={<BasicDetails/>}/>
        <Route path="/PersonalDetails" element={<PersonalDetails/>}/>
        <Route path="/ParentsDetails" element={<ParentsDetails/>}/>
        <Route path="/GuardianDetails" element={<GuardianDetails/>}/>
        <Route path="/AddressDetails" element={<AddressDetails/>}/>
        <Route path="/AcademicDetails" element={<AcademicDetails/>}/>
        <Route path="/UploadDetails" element={<UploadDetails/>}/>
        </Routes>
        


         
        </>
    )
}
export default UserApplicationDetails