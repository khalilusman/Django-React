import { createContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from './api';

const AuthContext = createContext();

// export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem('access') ? localStorage.getItem('access') : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem('access') ? jwtDecode(localStorage.getItem('access')) : null
    );

    const loginUser = async (username, password) => {
        const response = await axios.post('/token/', { username, password });
        if (response.status === 200) {
            setAuthTokens(response.data.access);
            setUser(jwtDecode(response.data.access));
            localStorage.setItem('access', response.data.access);
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('access');
    };

    const contextData = {
        user,
        authTokens,
        loginUser,
        logoutUser,
    };

    return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
export default AuthContext;