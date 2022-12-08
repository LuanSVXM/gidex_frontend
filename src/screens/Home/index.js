import React from "react";

import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

    React.useEffect(() => {
        
        const token = localStorage.getItem('token');

        console.log(token)
        
        if(!token) { 
          
            navigate('/', { redirect: true })
          
           return
      
      };
    },[])

    return (

        <h1> OI mundo home</h1>
    
    )
}