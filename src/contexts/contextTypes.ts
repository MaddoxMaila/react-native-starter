import { User } from "../types"

export type Colors = {
    primaryColor: any
}

export type Theme = {
    colors : Colors
}

export type AuthContextType = {
    Account : User,
    fetchUser : () => User | any,
    authUser : (user : User) => void,
    logoutUser : () => void
}

export type ThemeContextType = {
    setColors: (color: Colors) => void,
    getTheme: () => Theme
}

