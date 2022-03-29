import React from 'react';
import "./headerStyle.css";
import {useState, useEffect} from "react";
import About from "../About/About";


const Header = ({language, setLanguage, theme, setTheme}) => {

    const [burgerMenu, burgerMenuSet] = useState('off');

    const langToRu = () => {
        setLanguage('ru');
        localStorage.setItem('lang', 'ru');
    };
    const langToEng = () => {
        setLanguage('eng');
        localStorage.setItem('lang', 'eng');
    };
    const themeToDark = ()=>{
      setTheme('dark');
      localStorage.setItem('them', 'dark')
    };
    const themeToLight = ()=>{
        setTheme('light');
        localStorage.setItem('them', 'light')
    };

    return (
        <>
            <header className={theme === "light" ? "header headerLight" : "header headerDark"}>
                <div className="container">
                    <div className="header__navbar">

                        <h3 className={theme === 'light' ? "header__navbar-title titlight" : "header__navbar-title titdark"}>
                            Fullmetallguy's website
                        </h3>

                        <nav className="header__navbar-ul">

                            <a href="#About"
                               className={theme === "light" ? "header__navbar-ul_li liLight" : "header__navbar-ul_li liDark"}>
                                {language === "eng" ? "About" : "Обо мне"}
                            </a>
                            <a href="#Portfolio"
                               className={theme === "light" ? "header__navbar-ul_li liLight" : "header__navbar-ul_li liDark"}>
                                {language === "eng" ? "Portfolio" : "Портфолио"}
                            </a>
                            <a href="#Skills"
                               className={theme === "light" ? "header__navbar-ul_li liLight" : "header__navbar-ul_li liDark"}>
                                {language === "eng" ? "Skills" : "Навыки"}
                            </a>
                            <a href="#Contacts"
                               className={theme === "light" ? "header__navbar-ul_li liLight" : "header__navbar-ul_li liDark"}>
                                {language === "eng" ? "Contacts" : "Контакты"}
                            </a>


                            <svg onClick={() => {
                                burgerMenuSet('on')
                            }} className="burgerButton" width="20" height="14" viewBox="0 0 18 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 12H9V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z"
                                      fill={theme === "light" ? "#FFFFFF" : "#6C3EF8"}/>
                            </svg>

                        </nav>

                        {burgerMenu === 'on' ?
                            <div className={theme === "light" ? "burgerScreen BurgerLight" : "burgerScreen BurgerDark"}>

                                <nav className="burgerScreen__navbar">
                                    <a href="#About" className="burgerScreen__navbar-li">
                                        {language === "eng" ? "About" : "Обо мне"}
                                    </a>
                                    <a href="#Portfolio" className="burgerScreen__navbar-li">
                                        {language === "eng" ? "Portfolio" : "Портфолио"}
                                    </a>
                                    <a href="#Skills" className="burgerScreen__navbar-li">
                                        {language === "eng" ? "Skills" : "Навыки"}
                                    </a>
                                    <a href="#Contacts" className="burgerScreen__navbar-li">
                                        {language === "eng" ? "Contacts" : "Контакты"}
                                    </a>

                                </nav>
                                {}
                                <div className="burgerScreen__row">
                                    <span> {language === "eng" ? "Eng" : "Англ"}</span>
                                    <input className={language === "eng" ? "checkbox" : "checkbox check"}
                                           type="checkbox" onChange={() => {
                                        language === "eng" ? langToRu() : langToEng();
                                    }}
                                    />
                                    <span> {language === "eng" ? "Ru" : "Рус"}</span>
                                </div>
                                <div className="burgerScreen__row">
                                    <span> {language === "eng" ? "Light" : "Светлый"}</span>
                                    <input className={theme === "light" ? "checkbox" : "checkbox check"} type="checkbox"
                                           onChange={() => {
                                               theme === "light" ? themeToDark() : themeToLight();
                                           }}
                                    />
                                    <span> {language === "eng" ? "Dark" : "Темный"}</span>
                                </div>

                                <span className="burgerScreen__close" onClick={() => {
                                    burgerMenuSet('off')
                                }}>x</span>
                            </div>
                            : ""
                        }

                    </div>


                </div>
            </header>
        </>
    );
};

export default Header;