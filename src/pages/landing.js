import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>HA</title>
            <meta name="description" content="Landing Page" />
        </Helmet>
        <div id="main">
            <section id="one">
                <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/6n3pFFPSlW4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            </section>
        </div>

    </Layout>
)

export default Landing
