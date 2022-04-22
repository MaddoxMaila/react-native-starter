import React from "react"
import axios from "axios"
import {User} from '../types'
import AsyncStorage from "@react-native-community/async-storage"
import { AuthContextType } from "./contextTypes"

const authUser = (user: User) => {
}

const fetchUser = () => {  
}

const logoutUser = () => {
}

const AuthContext = React.createContext<AuthContextType>({
    Account : undefined,
    fetchUser : fetchUser,
    authUser : authUser,
    logoutUser : logoutUser
})

export {AuthContext, authUser, fetchUser, logoutUser}