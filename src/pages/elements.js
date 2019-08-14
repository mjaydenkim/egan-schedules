import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>How could you make Egan better?</h1>
                    </header>
                    <h3>Do you have any suggestions to improve our school? Please send it using the form below. I will read each message sent, and if I am elected, I will do my best to act on them! Thank you in advance for your suggestions.</h3>
                    <form name="contact" method="POST" data-netlify="true" action="/elements">
                        <input type="hidden" name="form-name" value="contact" /> 
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <div className="mb-5"><input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="First Name" /></div>
                            </div>
                            <div className="col-6">
                                <div className="mb-5"><input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Last Name" /></div>
                            </div>
                            <div className="col-12">
                                <div className="mb-5">
                                    <textarea name="demo-message" id="demo-message" placeholder="First period? Structure like this: Math Massaro or English Musich" rows="1"></textarea>
                                </div>
                            <div className="col-12">
                                <div className="mb-5">
                                    <textarea name="demo-message" id="demo-message" placeholder="Second period? Structure like this: Math Massaro or English Musich" rows="1"></textarea>
                                </div>
                            <div className="col-12">
                                <div className="mb-5">
                                    <textarea name="demo-message" id="demo-message" placeholder="Third period? Structure like this: Math Massaro or English Musich" rows="1"></textarea>
                                </div>
                            <div className="col-12">
                                <div className="mb-5">
                                    <textarea name="demo-message" id="demo-message" placeholder="Fourth period? Structure like this: Math Massaro or English Musich" rows="1"></textarea>
                                </div>
                            <div className="col-12">
                                <div className="mb-5">
                                    <textarea name="demo-message" id="demo-message" placeholder="Fifth period? Structure like this: Math Massaro or English Musich" rows="1"></textarea>
                                </div>
                            <div className="col-12">
                                <div className="mb-5">
                                    <textarea name="demo-message" id="demo-message" placeholder="Sixth period? Structure like this: Math Massaro or English Musich" rows="1"></textarea>
                                </div>
                            <div className="col-12">
                                <div className="mb-5">
                                    <textarea name="demo-message" id="demo-message" placeholder="Seventh period? Structure like this: Math Massaro or English Musich" rows="1"></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" className="special" /></li>
                                    <li><input type="reset" value="Reset" /></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                    </div>
            </section>
        </div>

    </Layout>
)

export default Elements
