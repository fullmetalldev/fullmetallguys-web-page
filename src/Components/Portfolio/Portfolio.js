import React from 'react';
import "./portfolio.css"
import furniture from "../../images/portfolio_imgs/furniture.png"
import man from "../../images/portfolio_imgs/man.png"
import indicorp from "../../images/portfolio_imgs/indicorp.png"
import database from "../../images/portfolio_imgs/database.png"
import box from "../../images/portfolio_imgs/box.png"
import werulee from "../../images/portfolio_imgs/werulee.png"
import ticketsquick from "../../images/portfolio_imgs/ticketsfast.png"
import bkappp from "../../images/portfolio_imgs/bkapp.png"
import hotskins from "../../images/portfolio_imgs/hotskins.png"
import fullchat from "../../images/portfolio_imgs/fullchat.png"

const Portfolio = ({language, theme}) => {
    return (
        <section id="Portfolio" className={theme === "light" ? "portfolio portLight" : "portfolio portDark"}>

            <div className="container">

                <div className="portfolio__row">

                    <div className="portfolio__row_title">
                        <h1>{language === "eng" ? "Portfolio" : "Портфолио"}</h1>
                    </div>


                    <img className="portfolio__row_card" src={werulee} alt="prj6"/>
                    <a target="_blank" href="https://ticketsquick.net//">
                        <img className="portfolio__row_card" src={ticketsquick} alt="ticketsquick"/>
                    </a>
                    <a target="_blank" href="https://bkapp-fullmetallguy.vercel.app/">
                        <img className="portfolio__row_card" src={bkappp} alt="bkapp"/>
                    </a>
                    <a target="_blank" href="https://hotskins.vercel.app/">
                        <img className="portfolio__row_card" src={hotskins} alt="hotskins"/>
                    </a>
                    <a target="_blank" href="https://fullmetallchat.vercel.app/">
                        <img className="portfolio__row_card" src={fullchat} alt="fullmetallchat"/>
                    </a>


                </div>

            </div>

        </section>
    );
};

export default Portfolio;