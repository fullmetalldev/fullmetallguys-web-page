import React from 'react';
import "./skills.css"
import react from "../Skills/imgs/react.png"
import bootstrap from "../Skills/imgs/bootstrap.png"
import jquery from "../Skills/imgs/jQuery.png"
import js from "../Skills/imgs/Javascript.png"
import html from "../Skills/imgs/html.png"
import css from "../Skills/imgs/css.png"
import git from "../Skills/imgs/git2.png"
import firebase from "../Skills/imgs/firebase.png"

const Skills = ({theme, language}) => {
    return (
        <section id="Skills" className={theme==="light" ? "skills skillsLight" : "skills skillsDark"}>

            <div className="container">

                <div className="skills__row">

                    <div className="skills__row_title">
                        <h1>{language === "eng" ? "Skills" : "Навыки"}</h1>
                    </div>

                    <img src={react} title="React" alt="react"/>
                    <img src={bootstrap} className="bootstrap" title="Bootstrap" alt="bootstrap"/>
                    <img src={jquery} title="Jquery" alt="jquery"/>
                    <img src={html} title="HTML" alt="html"/>
                    <img src={css} title="CSS/Sass/Scss" alt="css"/>
                    <img src={js} title="Js" alt="js"/>
                    <img src={git} title="Js" alt="git"/>
                    <img src={firebase} alt="firebase"/>


                </div>

            </div>

        </section>
    );
};

export default Skills;