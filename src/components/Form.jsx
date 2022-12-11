import React from "react";

import '../styles/Form.css'

function Form () {
    return(
        <div className="forms">
            <h2>— Напиши нам</h2>
            <div class="container">
                <div class="row">
                    <div className="col-sm forms--content">
                        <form action="/send-forms-back" className="forms--form">
                            <input type="text" name="Name" className="input--name" placeholder="Введите ваше имя"/>
                            <input type="text" name="Phone" className="input--phone" value="+7"/>
                            <input type="text" name="email" className="input--email" placeholder="Введите вашу почту"/>
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                    <img className="col-sm" src="images/giphy.gif" width="200px" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Form;