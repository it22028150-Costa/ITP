import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">HealthHub</span></h1>
            </header>
            <main className="public_main">
                <p> Healthhub is your onestop application for all your healthcare needs</p>
                <address>
                    SLIIT,<br/>
                    Kaduwela Road,<br/>
                    Malabe<br/>
                    <a href="Tel:+94112412265">011-2412265</a>
                </address>
                <br/>
            </main>
            <footer>
                <Link to="/login">Employee login</Link>
            </footer>
        </section>
    )


    return content
}

export default Public