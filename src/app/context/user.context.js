"use client";
import { createContext,useContext, useState } from "react";
import axios from "axios";

const userApiContext = createContext({
    user: [],
    apiCallforUser: ()=>{}
})


 export const userApiProvider = ({children}) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user,setUser] = useState([])

 
    const  apiCallforUser= async (userData) => {
        try {
            const response = await axios.post('api/singup',userData)
            return setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <userApiContext.Provider value={{user,apiCallforUser}}>
            {children}
        </userApiContext.Provider>
    )
}

 export  const UseUserApiContext = () => {
    return (
        useContext(userApiContext)
    )
}