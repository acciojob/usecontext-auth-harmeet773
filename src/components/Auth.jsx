import React, { useContext } from 'react';
import { AuthContext } from '../App';

/*
Incorporate an `Auth` component that consumes the `AuthContext`
 to display the authentication status and
 provides a checkbox for the user to interact with.
Implement a function that toggles the authentication status when the checkbox is checked,
 simulating a user passing the captcha verification.
*/   
function Auth(){
    const { authStatus,setAuthStatus } = useContext(AuthContext);
    console.log(authStatus);
    console.log(authStatus);
    let status ;
    const handleCheckboxChange = (e) => {
    setAuthStatus(prev => !prev); // toggle based on checkbox
  };
    if(authStatus){
        status = "You are authenticated,you can proceed";
    }else{
        status = "you are not authenticated";
    }
    return (
    <>
    <div>
        <h3>Click on the checkbox to get authenticated</h3>   
        { status }
        <br />
        <input type="checkbox" value={authStatus} onClick={handleCheckboxChange} />
    </div>
    </>
)}

export default Auth;