import { FormControl, Input, InputLabel } from '@mui/material';

import { useEffect } from "react";

export const AuthPage = () => {
    useEffect(() => {
        (async function () {
            const response = await fetch("http://localhost:8088/", {
              method: "GET",
            });
    
            if(!response.ok) return new Error("Error happened!");
    
            const data = await response.json();
              
            console.log(data);
            
        })()
      },[])

    return (
        <>
            <h1>Auth</h1>

            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id='email' placeholder='email' color='primary'/>
            </FormControl>
            
            <FormControl>
                <InputLabel htmlFor="email">Password</InputLabel>
                <Input placeholder='password' color='primary'/>
            </FormControl>
        </>
    )
}