import Header from "./Components/Header/Header";
import './style.css';
import About from "./Components/About/About";
import {useState, useEffect} from "react";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
    const [language, setLanguage] = useState('eng');
    const [theme, setTheme] = useState('light');
    useEffect(()=>{
        setLanguage(localStorage.getItem('lang'));
        setTheme(localStorage.getItem('them'))
    }, []);
    return (
        <div id="About" className={theme === "light" ? "App AppLight" : "App AppDark"}>
            <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
            <main className="main">
                <About language={language} theme={theme}/>
                <Services language={language} theme={theme}/>
                <Portfolio language={language} theme={theme}/>
                <Skills language={language} theme={theme}/>
                <Contacts language={language} theme={theme}/>
            </main>
            <Footer language={language} theme={theme}/>
        </div>
    );
}

export default App;
