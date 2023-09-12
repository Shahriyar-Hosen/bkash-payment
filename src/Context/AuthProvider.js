import React, { createContext } from 'react';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const allData = useFirebase();
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;