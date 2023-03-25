import React, { useContext, useState } from 'react'


const LanguageContext = React.createContext()

const initialLanguage = "es"
const translations = {
    es: {
        headerTitle: "Mi aplicacion con Context",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Obscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenido invitado",
        mainHello: "Hola Usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina",
    },
    en: {
        headerTitle: "My Application with context",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome",
        mainHello: "Hello User",
        mainContent: "My main content",
        footerTitle: "My footer",
    }
}

function LanguageProvider({  children }) {
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translations[language])
    
    function handleLanguage(e) {
        setLanguage(e.target.value)
        setTexts(translations[e.target.value])
    }
    
    const data = { texts, handleLanguage }

    return (
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    )
}

export { LanguageProvider }
export default LanguageContext