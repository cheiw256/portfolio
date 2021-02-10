import React from 'react';
import '../css/style.css'
import '../css/title.css'
import '../css/contact.css'

const infos = [
    {
        icon:'fas fa-user',
        head:'Name',
        sub:'Chiew Kian Khoon'
    },
    {
        icon:'fas fa-user',
        head:'Address',
        sub:'Kuala Lumpur, Malaysia'
    },
    {
        icon:'fas fa-envelope',
        head:'Email',
        sub:'chiew256@gmail.com'
    }
]

const Contact = () => {
    return(
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Get in Touch</div>
                        <p>Thank you for watching my portfolio until the end. Don't forgot to download my CV on about section to know me more. If you interested to hire me, please don't hesistate to drop me an email. Thank you.</p>
                        <div class="icons">
                            {infos.map(info => (
                                <div class="row">
                                    <i class={info.icon}></i>
                                    <div class="info">
                                        <div class="head">{info.head}</div>
                                        <div class="sub-title">{info.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="column right">
                        <div class="text">Message me</div>
                        <form action="#">
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" placeholder="Name" required/>
                                </div>
                                <div class="field email">
                                    <input type="email" placeholder="Email" required/>
                                </div>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Subject" required/>
                            </div>
                            <div class="field textarea">
                                <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                            </div>
                            <div class="button">
                                <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;