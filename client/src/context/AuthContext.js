import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export function AuthcontextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);


      async function getLoggedIn() {
        const loggedInRes = await axios.get("http://localhost:5000/user/loggedIn");
        setLoggedIn(loggedInRes.data);
        
      }

      useEffect(() => {
        getLoggedIn();
      }, []);
      
    return (
        <>
            
        </>
    )
}

export default AuthcontextProvider;