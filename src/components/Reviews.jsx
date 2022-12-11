import React from "react";

import '../styles/Reviews.css'

function Reviews () {
    return(
        <div className="Reviews">
            <h2>— Наши отзывы</h2>
            <div className="Reviews-list">
            <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div className="item">
                                <img src="images/ilon.png" className="avatar" />
                                <h3>Илон Маск</h3>
                                <p>Очень крутой дизайн спасибо вам большое обращусь еще раз когда буду делать теслу</p>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div className="item">
                                <img src="images/ilon.png" className="avatar" />
                                <h3>Илон Маск</h3>
                                <p>Очень крутой дизайн спасибо вам большое обращусь еще раз когда буду делать теслу</p>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div className="item">
                                <img src="images/ilon.png" className="avatar" />
                                <h3>Илон Маск</h3>
                                <p>Очень крутой дизайн спасибо вам большое обращусь еще раз когда буду делать теслу</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;