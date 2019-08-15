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
                    <form name="contact" method="POST" data-netlify="true">
                      <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                      </p>
                      <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                      </p>
                      <p>
                        <label>Your Role: <select name="role[]" multiple>
                          <option value="leader">Leader</option>
                          <option value="follower">Follower</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Message: <textarea name="message"></textarea></label>
                      </p>
                      <p>
                        <button type="submit">Send</button>
                      </p>
                    </form>
                    </div>
            </section>
        </div>

    </Layout>
)

export default Elements
