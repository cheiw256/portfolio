import React, { useState, useEffect } from 'react';
import {Row,Nav} from 'react-bootstrap'
import '../css/navbar.css'
import '../css/style.css'


const Navbar = () => {
    const[sticky,setSticky] = useState(false);
    const[show,setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setSticky(window.scrollY > 50);
            setShow(window.scrollY > 200);
        });
      }, []);

    const handleScroll = () => {
        window.scrollTo({top: 0, behavior: 'auto'});
    }

    return(
        <>
            <div class={`scroll-up-btn ${show? 'show' : null}`} onClick={handleScroll}>
                <i class="fas fa-angle-up"></i>
            </div>
            <Nav class={`navbar ${sticky? 'sticky' : null}`}>
                <div class="max-width">
                    <div class="logo"><a href="#">Portfo<span>lio.</span></a></div>
                        <ul class="menu">
                            <li><a href="#home" class="menu-btn">Home</a></li>
                            <li><a href="#about" class="menu-btn">About</a></li>
                            <li><a href="#services" class="menu-btn">Services</a></li>
                            <li><a href="#skills" class="menu-btn">Skills</a></li>
                            <li><a href="#teams" class="menu-btn">Teams</a></li>
                            <li><a href="#contact" class="menu-btn">Contact</a></li>
                        </ul>
                    <div class="menu-btn">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </Nav>
        </>
    )
}

export default Navbar