import {UseAuthContext} from './useAuthContext'

export const UseLogout = () =>{

    const {dispatch} = UseAuthContext()

    const logout = ()=>{

        //remove user from storage
        localStorage.removeItem('user')

        dispatch({type:'LOGOUT'})

    }


    return {logout}

}