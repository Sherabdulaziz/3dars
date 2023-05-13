import React from 'react'
import axios from 'axios'
import { Card } from '../Card/Card'

export const Components = () => {  const [users ,Setusers]=React.useState([])
  React.useEffect(()=>{
   
      axios({
          method  :"get",
      
         url: 'https://jsonplaceholder.typicode.com/users',
        
         }).then((res)=>Setusers(res.data))
  },[])
  return (
    <div>
     { users?.map((el)=>(
        <Card key={el.id} users={el}/>
      ))}
    </div>
  )
}
