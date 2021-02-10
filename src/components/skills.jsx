import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../css/style.css'
import '../css/title.css'
import '../css/skills.css'

const infos = [
    {
        language: 'HTML',
        percentage: '80%',
        class:'line html'
    },
    {
        language: 'CSS',
        percentage: '60%',
        class:'line css'
    },
    {
        language: 'JavaScript',
        percentage: '80%',
        class:'line js'
    },
    {
        language: 'React.js',
        percentage: '80%',
        class:'line react'
    },
    {
        language: 'Express.js',
        percentage: '70%',
        class:'line express'
    },
    {
        language: 'MySQL',
        percentage: '60%',
        class:'line mysql'
    },
    {
        language: 'MongoDb',
        percentage: '60%',
        class:'line mongodb'
    },
    {
        language: 'Firebase',
        percentage: '60%',
        class:'line firebase'
    }
]

const Skills = () => {
    return(
        <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">My creative skills & experiences.</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
                        <a href="#">Read more</a>
                    </div>  
                    <div class="column right">
                        {infos.map(info => (
                            <div class="bars">
                                <div class="info">
                                    <span>{info.language}</span>
                                    <span>{info.percentage}</span>
                                </div>
                                <div class={info.class}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;