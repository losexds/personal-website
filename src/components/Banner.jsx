import React from "react";

import '../styles/Banner.css'

function Banner () {
    function ContactTelegram () {
        window.location.href="http://t.me/loseex"
        console.log("Переход в Telegram...");
    }
    return(
        <div className="banner">
            <div className="text-place">
                <div>
                    <span><a href="/about">Cloud Development</a> 100%</span>
                    <h1>Увеличит вашу прибыль<br/>с помощью <strong>дизайн-решений</strong></h1>
                    <p>Конверсия в клик по кнопке ниже равна 47.35%<br/>Хочешь увеличить этот показатель?</p>
                    <button onClick={ContactTelegram}>Получить консультацию</button>
                    <p>А вдруг мы правы?</p>
                </div>
            </div>
            <img src="../images/vr-gif.gif" width="445px" alt="Фото в баннере." />
        </div>
    )
}

export default Banner;