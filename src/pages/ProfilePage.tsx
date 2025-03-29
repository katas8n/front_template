import { useEffect } from "react";

export const ProfilePage = () => {
    useEffect(() => {
        (async function () {
            const response = await fetch("http://localhost:8088/user", {
              method: "GET",
            });
    
            if(!response.ok) return new Error("Error happened!");
    
            const data = await response.json();
              
            console.log(data);
            
        })()
      },[])

    return (
        <h1>Profile</h1>
    )
}