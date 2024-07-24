import {AuthContext} from '../context/authContext'
import { useContext } from 'react'


export const UseAuthContext = ()=>{
    const context = useContext(AuthContext)


    if(!context){
        throw Error('use auth context must be inside an workoutsContextProvider')
    }


    return context
}
