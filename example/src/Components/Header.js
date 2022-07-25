import React from "react";
import '../Components/Header.css';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Images() {
    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
            <div className="head">
                <header>
                    <a href="#" className="logo">Logo</a>
                    <ul>
                        <li><a href="#">Registration</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </header>

                <section className="banner"></section>
            </div>
        </>
    )

}

export default Images;