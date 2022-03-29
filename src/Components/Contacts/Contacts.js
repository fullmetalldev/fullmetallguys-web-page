import React from 'react';
import "./contacts.css";

const Contacts = ({language, theme}) => {
    return (
        <section id="Contacts" className={theme==="light" ? "contacts contLight" : "contacts contDark"}>

            <div className="container">

                <div className="contacts__row">

                    <form  action="https://formsubmit.co/fullmetallguy@gmail.com" method="POST" className={theme==="light"?"contacts__row_form formLight" : "contacts__row_form formDark"}>
                        <h2>{language === "eng" ? "Leave your contacts" : "Оставьте ваши контакты"}</h2>
                        <input type="text" name="name" maxLength="12" placeholder={language==="eng" ?"Your name:" : "Ваше имя:"} required/>
                        <input type="number" name="phone" placeholder={language==="eng"?"Your number/contacts" : "Ваш номер/контакты:"}/>
                        <button type="submit">{language==="eng" ? "Send":"Отправить"}</button>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Contacts;