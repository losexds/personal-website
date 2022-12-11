import React from "react";

import '../styles/App.css';
import '../styles/Header.css';

function Header() {
    return(
        <header className="header-page">
            <div className="container">
                <div className="nav-group">
                    <a href="/">ГЛАВНАЯ</a>
                    <a href="/about">О НАС</a>
                    <a href="/contacts">КОНТАКТЫ</a>
                    <a href="/works">ПОРТФОЛИО</a>
                </div>
                <nav href="http://t.me/loseex" className="send">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</nav>
            </div>
        </header>
    )
}

export default Header;