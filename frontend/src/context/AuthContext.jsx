// AuthContext: This creates the context that will hold the authentication data.
// useAuthContext: This is a custom hook that allows your components to access the AuthContext easily.
// AuthContextProvider: This component provides the authUser and setAuthUser state to the rest of the app. It uses AuthContext.Provider to share the authentication state.

import { createContext , useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = ()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ( {children} ) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null) 

    return <AuthContext.Provider value = { { authUser , setAuthUser}} >{children} </AuthContext.Provider>

}