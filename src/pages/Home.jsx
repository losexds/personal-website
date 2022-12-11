import React from "react";

import Banner from '../components/Banner'
import Alert from '../components/Alert'
import Works from "../components/Works";
import Reviews from "../components/Reviews";
import Form from '../components/Form';

import '../styles/App.css'

function Homepage () {
    return(
        <div className="center-column">
            <Banner />
            <Alert />
            <Works />
            <Reviews />
            <Form />
        </div>
    )
}

export default Homepage;