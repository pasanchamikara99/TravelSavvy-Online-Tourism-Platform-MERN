import { useState } from "react";
import {UseAuthContext} from './useAuthContext'

export const useSignup = () =>{


    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = UseAuthContext()


    const signup = async(firstname,lastname,mobilenumber,type,email,password,confirmpassword)=>{

        setIsLoading(true)
        setError(null)


        const response = await fetch('/api/user/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({firstname,lastname,mobilenumber,type,email,password,confirmpassword})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){

            //save user local storage
            localStorage.setItem('user',JSON.stringify(json))

            //update the auth context
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)

        }

        console.log(json)
    }



    return {signup,isLoading,error}


}