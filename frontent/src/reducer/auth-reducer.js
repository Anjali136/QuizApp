    export const authReducer = (state, {type, payload}) => {
    switch (type){

        case "INITIAL_STATE":
            return {
                ...state,
                token: payload
            }

        case "email":
            return {
                ...state,
                email: payload
            }
        case "PASSWORD":
            return {
                ...state,
                password: payload
            }
        
        case "CLEAR_CREDENTIALS":
            return {
                ...state,
                email: "",
                password: ""
            }
        case "TOKEN":
            return {
                ...state,
                token: payload
            }
            case "CATEGORY":
                return{
                    ...state,
                    quizcategorie: payload
    }
        default:
            return state
    }
}