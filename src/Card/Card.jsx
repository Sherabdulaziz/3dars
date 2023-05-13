import React from 'react'
import axios from 'axios'
export const Card = ({users}) => {
    
  return (

    <ul style={{border:"1px solid red", margin:"30px",padding :"10px"}}>
       
       <li><p>{users.name}</p></li>
       <li><p>{users.email}</p></li>
       <li ><p>{users.phone}</p></li>
         
   
    </ul>

  )
}
