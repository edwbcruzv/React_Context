import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es"
const initialAuth=null
const translations = {
  es: {
    headerTitle: "Mi aplicacion sin Context",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Obscuro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenido invitado",
    mainHello: "Hola Usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina"
  },
  en: {
    headerTitle: "My Application without context",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer"
  }
}


function MyPage() {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage)
  const [texts, setTexts] = useState(translations[language])
  const [auth, setAuth] = useState(initialAuth)

  function handleTheme(e) {
    setTheme(e.target.value)
  }

  function handleLanguage(e) {
    setLanguage(e.target.value)
    setTexts(translations[e.target.value])
  }

  function handleAuth(e) {
    if (auth) {
      setAuth(null)
    } else {
      setAuth(true)
    }
  }

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme} handleLanguage={handleLanguage} texts={texts} auth={auth} handleAuth={handleAuth} />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
}

export default MyPage;
