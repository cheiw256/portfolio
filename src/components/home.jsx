import React, {useEffect, useState} from 'react';
import '../css/home.css';
import '../css/style.css';
import Typed from 'typed.js';

const Home = () => {
    useEffect(() => {
        var typed = new Typed(".typing", {
            strings: ["Developer", "Student", "Designer", "Freelancer", "Full-stacker"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    },[])

    return(
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">Hello, my name is</div>
                    <div class="text-2">Kian Khoon</div>
                    <div class="text-3">And I'm a <span class="typing"/></div>
                    <a href="#">Hire me</a>
                </div>
            </div>
        </section>
    )
}

export default Home;