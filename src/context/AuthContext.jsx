import React, { useContext, useState } from 'react'


const AuthContext = React.createContext()
const initialAuth = null;
function AuthProvider({ children }) {
    const [auth, setAuth] = useState(initialAuth);

    function handleAuth(e) {
        if (auth) {
            setAuth(null);
        } else {
            setAuth(true);
        }
    }

    const data = { auth, handleAuth }

    return (
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext