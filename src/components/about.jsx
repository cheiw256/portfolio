import React from 'react';
import ProfilePic1 from '../images/profile-1.jpeg';
import '../css/style.css'
import '../css/about.css'
import '../css/title.css'

const About = () => {
    return(
        <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">About me</h2>
                <div class="about-content">
                    <div class="column left">
                        <img src={ProfilePic1} alt="ProfilePic1"/>
                    </div>
                    <div class="column right">
                        <div class="text">I'm Kian Khoon and I'm a <span class="typing-2"></span></div>
                        <p>Year 1 undergraduate students currently study at University of Malaya, Malaysia. My major in degree is Information System, ambition is to become a data software archictecture, where combine software engineering skills with data. Currently, I'm also a MERN stack developer, which major in MongoDb, Express.js, React.js and Node.js. Additionaly, I'm also proficient in Firebase, where have experience combine Firebase with React.js to build a social media app. Have experience participating some projects and also some prototype web using MERN skills, if interested to know details please drop me an email.</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;