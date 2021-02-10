import React from 'react';
import '../css/service.css';
import '../css/style.css';
import '../css/title.css'

const cards = [
    {
        text:'Frontend',
        p:'Able to create a complex web pages by using React.js with short and clean code.'
    },
    {
        text:'Backend',
        p:'Able to create backend of the web pages by using Express.js with REST API.'
    },
    {
        text:'Database',
        p:'Able to produce the archictecture of the database by using MongoDb, Firebase or SQL.'
    }
]

const Service = () => {
    return(
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title">My services</h2>
                <div class="serv-content">
                {cards.map(card =>(
                    <div class="card">
                        <div class="box">
                            <div class="text">{card.text}</div>
                            <p>{card.p}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Service;