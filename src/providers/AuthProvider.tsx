import React, {useEffect, useState} from 'react'
import {AuthContext, fetchUser, authUser, logoutUser, } from '../contexts/Authentication'
import {User} from '../types'

interface AuthProviderProps {}

const AuthProvider : React.FC<AuthProviderProps> = ({children}) => {

        const [Account, setUser] = useState<User>(undefined)
        
        useEffect(() => {

        }, [])

        return (
            <AuthContext.Provider value={{Account, fetchUser, logoutUser, authUser}}>
                {children}
            </AuthContext.Provider>
        )
}

export default AuthProvider