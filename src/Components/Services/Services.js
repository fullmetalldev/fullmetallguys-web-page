import React from 'react';
import "./services.css"

const Services = ({language, theme}) => {
    return (
        <section className={theme==="light" ? "services servicesLight" : "services servicesDark"}>

            <div className="container">

                <div className="services__row">

                    <div className="services__row_titleRow">
                        <h1>{language === "eng" ? "Services" : "Услуги"}</h1>
                    </div>

                    <div className={theme==="light" ?"services__row_card cardLight":"services__row_card cardDark"}>
                        <h3>{language === "eng" ? "Cross-platform layout" : "Кроссплатформенная верстка"}</h3>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7H5V5C5 3.89543 5.89543 3 7 3H20C21.1046 3 22 3.89543 22 5V16C22 17.1046 21.1046 18 20 18H12V19C12 20.1046 11.1046 21 10 21ZM4 9V19H10V9H4ZM7 7H10C11.1046 7 12 7.89543 12 9V16H20V5H7V7Z" fill="#6C3EF8"/>
                        </svg>
                    </div>

                    <div className={theme==="light" ?"services__row_card cardLight":"services__row_card cardDark"}>
                        <h3>{language === "eng" ? "Website or full Web-Application" : "Вебсайт или полноценное веб-приложение"}</h3>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 19H3C1.89543 19 1 18.1046 1 17V16H3V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V16H23V17C23 18.1046 22.1046 19 21 19ZM5 7V16H19V7H5Z" fill="#6C3EF8"/>
                        </svg>
                    </div>

                    <div className={theme==="light" ?"services__row_card cardLight":"services__row_card cardDark"}>
                        <h3>{language === "eng" ? "With back-end" : "С бек-эндом"}</h3>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C7.664 22 4 19.965 4 17.556V6.444C4 4.035 7.664 2 12 2C16.336 2 20 4.035 20 6.444V17.556C20 19.965 16.337 22 12 22ZM6 14.9V17.559C6.07 18.112 8.309 19.781 12 19.781C15.691 19.781 17.931 18.107 18 17.553V14.9C16.1794 15.9554 14.1039 16.4905 12 16.447C9.89606 16.4906 7.82058 15.9554 6 14.9ZM6 9.341V12C6.07 12.553 8.309 14.222 12 14.222C15.691 14.222 17.931 12.548 18 11.994V9.341C16.1795 10.3968 14.104 10.9323 12 10.889C9.89596 10.9323 7.82046 10.3968 6 9.341ZM12 4.222C8.308 4.222 6.069 5.896 6 6.451C6.07 7 8.311 8.666 12 8.666C15.689 8.666 17.931 6.992 18 6.438C17.93 5.887 15.689 4.222 12 4.222Z" fill="#2E3A59"/>
                        </svg>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Services;