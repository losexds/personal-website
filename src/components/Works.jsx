import React from "react";

import '../styles/Works.css'
import '../styles/bootstrap-grid.css'

function Works() {
    return (
        <div className="Works">
            <h2>— Наши последние работы</h2>
            <div className="Works-list">
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div className="item">
                                <img src="images/minecraft.png" alt="Фото проекта" />
                                <div className="item--text">
                                    <h3>Дизайн сайта для магазина Minecraft модов</h3>
                                    <p>Разработали прототип сайта, UX/UI логику, создали первые макеты и получили бабки.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div className="item">
                                <img src="images/minecraft.png" alt="Фото проекта" />
                                <div className="item--text">
                                    <h3>Дизайн сайта для магазина Minecraft модов</h3>
                                    <p>Разработали прототип сайта, UX/UI логику, создали первые макеты и получили бабки.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div className="item">
                                <img src="images/minecraft.png" alt="Фото проекта"/>
                                <div className="item--text">
                                    <h3>Дизайн сайта для магазина Minecraft модов</h3>
                                    <p>Разработали прототип сайта, UX/UI логику, создали первые макеты и получили бабки.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;