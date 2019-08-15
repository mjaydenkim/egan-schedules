import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Thanks!</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Thank you!</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Hi! Thanks for using my applet, I really appreciate it! I hope you had an awesome summer and that you got good teachers :)</p>
                    <p>-Matthew Kim, 8th grader</p>
                    <p>To view everyone's schedules, please visit this link: <a href="http://bit.ly/eganschedules"> http://bit.ly/eganschedules </a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
