import React, { useState } from "react";
import Footer from "./FooterContext";
import Header from "./HeaderContext";
import Main from "./MainContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

function MyPageContext() {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>

          <AuthProvider>
            <Header/>
            <Main/>
          </AuthProvider>

            <Footer />
          
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyPageContext;
