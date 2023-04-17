import {  Auth, Hub} from "aws-amplify";
import { useState, useEffect } from "react";
import { ToggleButton , Authenticator} from "@aws-amplify/ui-react";
import "./profile.css"

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your username here',
      isRequired: true,
      label: 'Username:'
    },
  },
}

  export const Profile = () => {
   const [user, setUser] = useState(null)
   useEffect(() => {
     checkUser()
   }, [])


    

async function checkUser(){
Hub.listen("auth", (data)=> {
       console.log(data.payload.event);  
    })
  const user= await Auth.currentAuthenticatedUser()
  setUser(user)

}
  return (
    <>
    {
      user  && (
        <>
        <h3> {user.attributes.email }</h3>
        <h4> {user.username }</h4>
        </>
         
         
      )
    }
    <Authenticator formFields={formFields}>
      {({ signOut }) => 
      <ToggleButton  className="round-shape"
      isPressed={user} isFullWidth
      onClick={signOut}> Sign Out </ToggleButton>}
    </Authenticator>
   
    </>
  )
}
