import React from 'react';
import about from "../../images/photo.png";
import "./aboutStyle.css";

const About = ({language, theme}) => {
    return (

        <section  className={theme==="light" ? "about aboutLight" : "about aboutDark"}>
            <div className="container">

                <div className="about__row">

                    <div className= {theme==="light" ? "about__row-card lightCard" : "about__row-card darkCard"}>

                        <img className="about__row-card_img" src={about} alt="Erbol Nurekov"/>

                        <span className="about__row-card_title">
                                    {language === "eng"
                                        ?
                                        "Hello everyone! My name is Erbol, i'm 17 years old. I'm junior frontend developer with half year experience. And if you needed a website or landing page i can create for you, your business full functionally website or simple landing page."
                                        :
                                        "Привет всем! Меня зовут Эрбол, мне 17 лет. Я junior фронтенд-разработчик с полугодовым опытом работы. И если вам нужен веб-сайт или целевая страница, я могу создать для вас,  вашего бизнеса полнофункциональный веб-сайт или простую целевую страницу."}
                                </span>

                    </div>

                </div>

            </div>
        </section>

    );
};

export default About;