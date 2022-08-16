import Cta from "./components/Cta";
import HeaderFooter from "./components/HeaderFooter";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Profile from "./components/Profile";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <header className="header">
        <HeaderFooter></HeaderFooter>
      </header>
      <main className="main">
        <Skills />
        <Profile />
        <Work />
        <Cta></Cta>
      </main>
      <footer className="footer">
        <HeaderFooter></HeaderFooter>
      </footer>
    </React.StrictMode>
  );
}

export default App;
