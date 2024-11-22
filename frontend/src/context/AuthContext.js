import { createContext, useEffect, useReducer } from "react";

const initial_state = {
    user: (() => {
        try {
            const user = localStorage.getItem('user');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error('Error parsing user data from localStorage:', error);
            return null;
        }
    })(),
    loading: false,
    error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START" :
            return {
                user: null,
                loading: false,
                error: null,
            };
        case "LOGIN_SUCCESS" :
            return {
                user: action.payload,
                loading: false,
                error: null,
            }
        case "LOGIN_FAILURE" :
            return {
                user: null,
                loading: false,
                error: action.payload,
            }
        case "REGISTER_SUCCESS" :
            return {
                user: null,
                loading: false,
                error: null
            }
        case "LOGOUT" :
            return {
                user: null,
                loading: false,
                error: null
            }
        
        default :
        return state
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state);
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
            >
                {children}
        </AuthContext.Provider>
    );
};