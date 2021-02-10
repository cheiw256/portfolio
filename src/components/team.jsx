import React from 'react';
import '../css/style.css'
import '../css/title.css'
import '../css/team.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Profile1 from '../images/profile-1.jpeg'
import Profile2 from '../images/profile-2.jpeg'
import Profile3 from '../images/profile-3.jpeg'
import Profile4 from '../images/profile-4.jpeg'
import Profile5 from '../images/profile-5.jpeg'

let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;

const cards = [
    {
        text:'Someone name',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:Profile1
    },
    {
        text:'Someone name',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:Profile2
    },
    {
        text:'Someone name',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:Profile3
    },
    {
        text:'Someone name',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:Profile4
    },
    {
        text:'Someone name',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img:Profile5
    },
]

const Team = () => {
    const options = {
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    }

    return(
        <section class="teams" id="teams">
            <div class="max-width">
                <h2 class="title">My teams</h2>
                <OwlCarousel 
                    className="carousel owl-carousel" {...options}>
                        {cards.map(card => (
                            <div class="card">
                                <div class="box">
                                    <img src={card.img} alt=""/>
                                    <div class="text">{card.text}</div>
                                    <p>{card.p}</p>
                                </div>
                            </div>
                        ))}
                </OwlCarousel>
            </div>
        </section>
    )
}
export default Team;