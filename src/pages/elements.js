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
                      <p>
                        <label>Your Name (First and Last): <input type="text" name="name" /></label>   
                      </p>
                      <p>
                        <label>Your Homeroom Teacher: <select name="role[]" multiple>
                          <option value="asun">Asuncion (Math 7/8)</option>
                          <option value="bruz">Bruzelius (English 8)</option>
                          <option value="chia">Chiang (Mandarin 7/8)</option>
                          <option value="clav">Clavijo (French, Drama)</option>
                          <option value="claw">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg">Haggin (History 8)</option>
                          <option value="hami">Hamilton (Chorus)</option>
                          <option value="haym">Hayman (History 8)</option>
                          <option value="hsua">Hsuan (Art 7/8)</option>
                          <option value="huyn">Hyunh (PE 8)</option>
                          <option value="inga">Ingah (Spanish 7/8)</option>
                          <option value="kess">Kesselring (History 7)</option>
                          <option value="lee">Lee (PE 7/8)</option>
                          <option value="mass">Massaro (Geometry 8)</option>
                          <option value="mcfa">McFarland (Science 7)</option>
                          <option value="mori">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar">Olarig (Science 8)</option>
                          <option value="osbe">Osberg (Science 8)</option>
                          <option value="past">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec">Spector (Music 7/8)</option>
                          <option value="swen">Swenson (A Lot 7/8)</option>
                          <option value="truo">Truong (Science 7)</option>
                          <option value="vaid">Vaidyanathan (CS 7/8)</option>
                          <option value="vall">Vallez (History 7)</option>
                          <option value="vida">Vidales (Math 7/8)</option>
                          <option value="wulf">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your First Period Teacher: <select name="role[]" multiple>
                          <option value="asun">Asuncion (Math 7/8)</option>
                          <option value="bruz">Bruzelius (English 8)</option>
                          <option value="chia">Chiang (Mandarin 7/8)</option>
                          <option value="clav">Clavijo (French, Drama)</option>
                          <option value="claw">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg">Haggin (History 8)</option>
                          <option value="hami">Hamilton (Chorus)</option>
                          <option value="haym">Hayman (History 8)</option>
                          <option value="hsua">Hsuan (Art 7/8)</option>
                          <option value="huyn">Hyunh (PE 8)</option>
                          <option value="inga">Ingah (Spanish 7/8)</option>
                          <option value="kess">Kesselring (History 7)</option>
                          <option value="lee">Lee (PE 7/8)</option>
                          <option value="mass">Massaro (Geometry 8)</option>
                          <option value="mcfa">McFarland (Science 7)</option>
                          <option value="mori">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar">Olarig (Science 8)</option>
                          <option value="osbe">Osberg (Science 8)</option>
                          <option value="past">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec">Spector (Music 7/8)</option>
                          <option value="swen">Swenson (A Lot 7/8)</option>
                          <option value="truo">Truong (Science 7)</option>
                          <option value="vaid">Vaidyanathan (CS 7/8)</option>
                          <option value="vall">Vallez (History 7)</option>
                          <option value="vida">Vidales (Math 7/8)</option>
                          <option value="wulf">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Second Period Teacher: <select name="role[]" multiple>
                          <option value="asun">Asuncion (Math 7/8)</option>
                          <option value="bruz">Bruzelius (English 8)</option>
                          <option value="chia">Chiang (Mandarin 7/8)</option>
                          <option value="clav">Clavijo (French, Drama)</option>
                          <option value="claw">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg">Haggin (History 8)</option>
                          <option value="hami">Hamilton (Chorus)</option>
                          <option value="haym">Hayman (History 8)</option>
                          <option value="hsua">Hsuan (Art 7/8)</option>
                          <option value="huyn">Hyunh (PE 8)</option>
                          <option value="inga">Ingah (Spanish 7/8)</option>
                          <option value="kess">Kesselring (History 7)</option>
                          <option value="lee">Lee (PE 7/8)</option>
                          <option value="mass">Massaro (Geometry 8)</option>
                          <option value="mcfa">McFarland (Science 7)</option>
                          <option value="mori">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar">Olarig (Science 8)</option>
                          <option value="osbe">Osberg (Science 8)</option>
                          <option value="past">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec">Spector (Music 7/8)</option>
                          <option value="swen">Swenson (A Lot 7/8)</option>
                          <option value="truo">Truong (Science 7)</option>
                          <option value="vaid">Vaidyanathan (CS 7/8)</option>
                          <option value="vall">Vallez (History 7)</option>
                          <option value="vida">Vidales (Math 7/8)</option>
                          <option value="wulf">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Third Period Teacher: <select name="role[]" multiple>
                          <option value="asun">Asuncion (Math 7/8)</option>
                          <option value="bruz">Bruzelius (English 8)</option>
                          <option value="chia">Chiang (Mandarin 7/8)</option>
                          <option value="clav">Clavijo (French, Drama)</option>
                          <option value="claw">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg">Haggin (History 8)</option>
                          <option value="hami">Hamilton (Chorus)</option>
                          <option value="haym">Hayman (History 8)</option>
                          <option value="hsua">Hsuan (Art 7/8)</option>
                          <option value="huyn">Hyunh (PE 8)</option>
                          <option value="inga">Ingah (Spanish 7/8)</option>
                          <option value="kess">Kesselring (History 7)</option>
                          <option value="lee">Lee (PE 7/8)</option>
                          <option value="mass">Massaro (Geometry 8)</option>
                          <option value="mcfa">McFarland (Science 7)</option>
                          <option value="mori">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar">Olarig (Science 8)</option>
                          <option value="osbe">Osberg (Science 8)</option>
                          <option value="past">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec">Spector (Music 7/8)</option>
                          <option value="swen">Swenson (A Lot 7/8)</option>
                          <option value="truo">Truong (Science 7)</option>
                          <option value="vaid">Vaidyanathan (CS 7/8)</option>
                          <option value="vall">Vallez (History 7)</option>
                          <option value="vida">Vidales (Math 7/8)</option>
                          <option value="wulf">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Fourth Period Teacher: <select name="role[]" multiple>
                          <option value="asun">Asuncion (Math 7/8)</option>
                          <option value="bruz">Bruzelius (English 8)</option>
                          <option value="chia">Chiang (Mandarin 7/8)</option>
                          <option value="clav">Clavijo (French, Drama)</option>
                          <option value="claw">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg">Haggin (History 8)</option>
                          <option value="hami">Hamilton (Chorus)</option>
                          <option value="haym">Hayman (History 8)</option>
                          <option value="hsua">Hsuan (Art 7/8)</option>
                          <option value="huyn">Hyunh (PE 8)</option>
                          <option value="inga">Ingah (Spanish 7/8)</option>
                          <option value="kess">Kesselring (History 7)</option>
                          <option value="lee">Lee (PE 7/8)</option>
                          <option value="mass">Massaro (Geometry 8)</option>
                          <option value="mcfa">McFarland (Science 7)</option>
                          <option value="mori">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar">Olarig (Science 8)</option>
                          <option value="osbe">Osberg (Science 8)</option>
                          <option value="past">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec">Spector (Music 7/8)</option>
                          <option value="swen">Swenson (A Lot 7/8)</option>
                          <option value="truo">Truong (Science 7)</option>
                          <option value="vaid">Vaidyanathan (CS 7/8)</option>
                          <option value="vall">Vallez (History 7)</option>
                          <option value="vida">Vidales (Math 7/8)</option>
                          <option value="wulf">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Fifth Period Teacher: <select name="role[]" multiple>
                          <option value="asun">Asuncion (Math 7/8)</option>
                          <option value="bruz">Bruzelius (English 8)</option>
                          <option value="chia">Chiang (Mandarin 7/8)</option>
                          <option value="clav">Clavijo (French, Drama)</option>
                          <option value="claw">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg">Haggin (History 8)</option>
                          <option value="hami">Hamilton (Chorus)</option>
                          <option value="haym">Hayman (History 8)</option>
                          <option value="hsua">Hsuan (Art 7/8)</option>
                          <option value="huyn">Hyunh (PE 8)</option>
                          <option value="inga">Ingah (Spanish 7/8)</option>
                          <option value="kess">Kesselring (History 7)</option>
                          <option value="lee">Lee (PE 7/8)</option>
                          <option value="mass">Massaro (Geometry 8)</option>
                          <option value="mcfa">McFarland (Science 7)</option>
                          <option value="mori">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar">Olarig (Science 8)</option>
                          <option value="osbe">Osberg (Science 8)</option>
                          <option value="past">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec">Spector (Music 7/8)</option>
                          <option value="swen">Swenson (A Lot 7/8)</option>
                          <option value="truo">Truong (Science 7)</option>
                          <option value="vaid">Vaidyanathan (CS 7/8)</option>
                          <option value="vall">Vallez (History 7)</option>
                          <option value="vida">Vidales (Math 7/8)</option>
                          <option value="wulf">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Sixth Period Teacher: <select name="role[]" multiple>
                          <option value="asun">Asuncion (Math 7/8)</option>
                          <option value="bruz">Bruzelius (English 8)</option>
                          <option value="chia">Chiang (Mandarin 7/8)</option>
                          <option value="clav">Clavijo (French, Drama)</option>
                          <option value="claw">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg">Haggin (History 8)</option>
                          <option value="hami">Hamilton (Chorus)</option>
                          <option value="haym">Hayman (History 8)</option>
                          <option value="hsua">Hsuan (Art 7/8)</option>
                          <option value="huyn">Hyunh (PE 8)</option>
                          <option value="inga">Ingah (Spanish 7/8)</option>
                          <option value="kess">Kesselring (History 7)</option>
                          <option value="lee">Lee (PE 7/8)</option>
                          <option value="mass">Massaro (Geometry 8)</option>
                          <option value="mcfa">McFarland (Science 7)</option>
                          <option value="mori">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar">Olarig (Science 8)</option>
                          <option value="osbe">Osberg (Science 8)</option>
                          <option value="past">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec">Spector (Music 7/8)</option>
                          <option value="swen">Swenson (A Lot 7/8)</option>
                          <option value="truo">Truong (Science 7)</option>
                          <option value="vaid">Vaidyanathan (CS 7/8)</option>
                          <option value="vall">Vallez (History 7)</option>
                          <option value="vida">Vidales (Math 7/8)</option>
                          <option value="wulf">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Seventh Period Teacher: <select name="role[]" multiple>
                          <option value="asun">Asuncion (Math 7/8)</option>
                          <option value="bruz">Bruzelius (English 8)</option>
                          <option value="chia">Chiang (Mandarin 7/8)</option>
                          <option value="clav">Clavijo (French, Drama)</option>
                          <option value="claw">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg">Haggin (History 8)</option>
                          <option value="hami">Hamilton (Chorus)</option>
                          <option value="haym">Hayman (History 8)</option>
                          <option value="hsua">Hsuan (Art 7/8)</option>
                          <option value="huyn">Hyunh (PE 8)</option>
                          <option value="inga">Ingah (Spanish 7/8)</option>
                          <option value="kess">Kesselring (History 7)</option>
                          <option value="lee">Lee (PE 7/8)</option>
                          <option value="mass">Massaro (Geometry 8)</option>
                          <option value="mcfa">McFarland (Science 7)</option>
                          <option value="mori">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar">Olarig (Science 8)</option>
                          <option value="osbe">Osberg (Science 8)</option>
                          <option value="past">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec">Spector (Music 7/8)</option>
                          <option value="swen">Swenson (A Lot 7/8)</option>
                          <option value="truo">Truong (Science 7)</option>
                          <option value="vaid">Vaidyanathan (CS 7/8)</option>
                          <option value="vall">Vallez (History 7)</option>
                          <option value="vida">Vidales (Math 7/8)</option>
                          <option value="wulf">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Any other notes?: <textarea name="message"></textarea></label>
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
