import { createContext, useContext, useReducer,useEffect } from "react";
import { authReducer } from "../reducer/auth-reducer";

const initialState = {
    username:"",
    email: "",
    password: "",
    token:"",
    quizcategorie:"",
}
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    useEffect(()=>{
        const token=localStorage.getItem("token");
        authDispatch({
            type:"INITIAL_STATE",
            payload:token,
        })
    },[])
    const [{ email, password,token,quizcategorie }, authDispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{ email, password,token, authDispatch,quizcategorie }}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider }