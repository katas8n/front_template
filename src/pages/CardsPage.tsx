import { useEffect } from "react";

export const CardsPage = () => {
    useEffect(() => {
        (async function () {
            const response = await fetch("http://localhost:8088/cards", {
              method: "GET",
            });
    
            if(!response.ok) return new Error("Error happened!");
    
            const data = await response.json();
              
            console.log(data);
            
        })()
      },[])

    return (
        <h1>Cards</h1>
    )
}