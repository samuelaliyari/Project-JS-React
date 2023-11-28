import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/footer/Footer";
import "./App.css"
import { useState } from "react";



const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return ( 
    <div className={darkMode ? "dark" : "light"}>
      <Header darkModeOn = {setDarkMode} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;