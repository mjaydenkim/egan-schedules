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
                    <form name="contact" method="POST" netlify action="/elements">
                      <p>
                        <label>Your Name (First and Last): <input type="text" name="name" /></label>   
                      </p>
                      <p>
                        <label>Your Homeroom Teacher: <select name="hr" multiple>
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
                          <option value="asun1">Asuncion (Math 7/8)</option>
                          <option value="bruz1">Bruzelius (English 8)</option>
                          <option value="chia1">Chiang (Mandarin 7/8)</option>
                          <option value="clav1">Clavijo (French, Drama)</option>
                          <option value="claw1">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg1">Haggin (History 8)</option>
                          <option value="hami1">Hamilton (Chorus)</option>
                          <option value="haym1">Hayman (History 8)</option>
                          <option value="hsua1">Hsuan (Art 7/8)</option>
                          <option value="huyn1">Hyunh (PE 8)</option>
                          <option value="inga1">Ingah (Spanish 7/8)</option>
                          <option value="kess1">Kesselring (History 7)</option>
                          <option value="lee1">Lee (PE 7/8)</option>
                          <option value="mass1">Massaro (Geometry 8)</option>
                          <option value="mcfa1">McFarland (Science 7)</option>
                          <option value="mori1">Morimoto (Silent Study 7/8)</option>
                          <option value="musi1">Musich (English 8)</option>
                          <option value="nguy1">Nguyen (English 7)</option>
                          <option value="olar1">Olarig (Science 8)</option>
                          <option value="osbe1">Osberg (Science 8)</option>
                          <option value="past1">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec1">Spector (Music 7/8)</option>
                          <option value="swen1">Swenson (A Lot 7/8)</option>
                          <option value="truo1">Truong (Science 7)</option>
                          <option value="vaid1">Vaidyanathan (CS 7/8)</option>
                          <option value="vall1">Vallez (History 7)</option>
                          <option value="vida1">Vidales (Math 7/8)</option>
                          <option value="wulf1">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca1">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane1">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Second Period Teacher: <select name="role[]" multiple>
                          <option value="asun2">Asuncion (Math 7/8)</option>
                          <option value="bruz2">Bruzelius (English 8)</option>
                          <option value="chia2">Chiang (Mandarin 7/8)</option>
                          <option value="clav2">Clavijo (French, Drama)</option>
                          <option value="claw2">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg2">Haggin (History 8)</option>
                          <option value="hami2">Hamilton (Chorus)</option>
                          <option value="haym2">Hayman (History 8)</option>
                          <option value="hsua2">Hsuan (Art 7/8)</option>
                          <option value="huyn2">Hyunh (PE 8)</option>
                          <option value="inga2">Ingah (Spanish 7/8)</option>
                          <option value="kess2">Kesselring (History 7)</option>
                          <option value="lee2">Lee (PE 7/8)</option>
                          <option value="mass2">Massaro (Geometry 8)</option>
                          <option value="mcfa2">McFarland (Science 7)</option>
                          <option value="mori2">Morimoto (Silent Study 7/8)</option>
                          <option value="musi">Musich (English 8)</option>
                          <option value="nguy2">Nguyen (English 7)</option>
                          <option value="olar2">Olarig (Science 8)</option>
                          <option value="osbe2">Osberg (Science 8)</option>
                          <option value="past2">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec2">Spector (Music 7/8)</option>
                          <option value="swen2">Swenson (A Lot 7/8)</option>
                          <option value="truo2">Truong (Science 7)</option>
                          <option value="vaid2">Vaidyanathan (CS 7/8)</option>
                          <option value="vall2">Vallez (History 7)</option>
                          <option value="vida2">Vidales (Math 7/8)</option>
                          <option value="wulf2">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca2">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane2">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Third Period Teacher: <select name="role[]" multiple>
                          <option value="asun3">Asuncion (Math 7/8)</option>
                          <option value="bruz3">Bruzelius (English 8)</option>
                          <option value="chia3">Chiang (Mandarin 7/8)</option>
                          <option value="clav3">Clavijo (French, Drama)</option>
                          <option value="claw3">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg3">Haggin (History 8)</option>
                          <option value="hami3">Hamilton (Chorus)</option>
                          <option value="haym3">Hayman (History 8)</option>
                          <option value="hsua3">Hsuan (Art 7/8)</option>
                          <option value="huyn3">Hyunh (PE 8)</option>
                          <option value="inga3">Ingah (Spanish 7/8)</option>
                          <option value="kess3">Kesselring (History 7)</option>
                          <option value="lee3">Lee (PE 7/8)</option>
                          <option value="mass3">Massaro (Geometry 8)</option>
                          <option value="mcfa3">McFarland (Science 7)</option>
                          <option value="mori3">Morimoto (Silent Study 7/8)</option>
                          <option value="musi3">Musich (English 8)</option>
                          <option value="nguy3">Nguyen (English 7)</option>
                          <option value="olar3">Olarig (Science 8)</option>
                          <option value="osbe3">Osberg (Science 8)</option>
                          <option value="past3">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec3">Spector (Music 7/8)</option>
                          <option value="swen3">Swenson (A Lot 7/8)</option>
                          <option value="truo3">Truong (Science 7)</option>
                          <option value="vaid3">Vaidyanathan (CS 7/8)</option>
                          <option value="vall3">Vallez (History 7)</option>
                          <option value="vida3">Vidales (Math 7/8)</option>
                          <option value="wulf3">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca3">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane3">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Fourth Period Teacher: <select name="role[]" multiple>
                          <option value="asun4">Asuncion (Math 7/8)</option>
                          <option value="bruz4">Bruzelius (English 8)</option>
                          <option value="chia4">Chiang (Mandarin 7/8)</option>
                          <option value="clav4">Clavijo (French, Drama)</option>
                          <option value="claw4">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg4">Haggin (History 8)</option>
                          <option value="hami4">Hamilton (Chorus)</option>
                          <option value="haym4">Hayman (History 8)</option>
                          <option value="hsua4">Hsuan (Art 7/8)</option>
                          <option value="huyn4">Hyunh (PE 8)</option>
                          <option value="inga4">Ingah (Spanish 7/8)</option>
                          <option value="kess4">Kesselring (History 7)</option>
                          <option value="lee4">Lee (PE 7/8)</option>
                          <option value="mass4">Massaro (Geometry 8)</option>
                          <option value="mcfa4">McFarland (Science 7)</option>
                          <option value="mori4">Morimoto (Silent Study 7/8)</option>
                          <option value="musi4">Musich (English 8)</option>
                          <option value="nguy">Nguyen (English 7)</option>
                          <option value="olar4">Olarig (Science 8)</option>
                          <option value="osbe4">Osberg (Science 8)</option>
                          <option value="past4">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec4">Spector (Music 7/8)</option>
                          <option value="swen4">Swenson (A Lot 7/8)</option>
                          <option value="truo4">Truong (Science 7)</option>
                          <option value="vaid4">Vaidyanathan (CS 7/8)</option>
                          <option value="vall4">Vallez (History 7)</option>
                          <option value="vida4">Vidales (Math 7/8)</option>
                          <option value="wulf4">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca4">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane4">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Fifth Period Teacher: <select name="role[]" multiple>
                          <option value="asun5">Asuncion (Math 7/8)</option>
                          <option value="bruz5">Bruzelius (English 8)</option>
                          <option value="chia5">Chiang (Mandarin 7/8)</option>
                          <option value="clav5">Clavijo (French, Drama)</option>
                          <option value="claw5">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg5">Haggin (History 8)</option>
                          <option value="hami5">Hamilton (Chorus)</option>
                          <option value="haym5">Hayman (History 8)</option>
                          <option value="hsua5">Hsuan (Art 7/8)</option>
                          <option value="huyn5">Hyunh (PE 8)</option>
                          <option value="inga5">Ingah (Spanish 7/8)</option>
                          <option value="kess5">Kesselring (History 7)</option>
                          <option value="lee5">Lee (PE 7/8)</option>
                          <option value="mass5">Massaro (Geometry 8)</option>
                          <option value="mcfa5">McFarland (Science 7)</option>
                          <option value="mori5">Morimoto (Silent Study 7/8)</option>
                          <option value="musi5">Musich (English 8)</option>
                          <option value="nguy5">Nguyen (English 7)</option>
                          <option value="olar5">Olarig (Science 8)</option>
                          <option value="osbe5">Osberg (Science 8)</option>
                          <option value="past5">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec5">Spector (Music 7/8)</option>
                          <option value="swen5">Swenson (A Lot 7/8)</option>
                          <option value="truo5">Truong (Science 7)</option>
                          <option value="vaid5">Vaidyanathan (CS 7/8)</option>
                          <option value="vall5">Vallez (History 7)</option>
                          <option value="vida5">Vidales (Math 7/8)</option>
                          <option value="wulf5">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca5">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane5">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Sixth Period Teacher: <select name="role[]" multiple>
                          <option value="asun6">Asuncion (Math 7/8)</option>
                          <option value="bruz6">Bruzelius (English 8)</option>
                          <option value="chia6">Chiang (Mandarin 7/8)</option>
                          <option value="clav6">Clavijo (French, Drama)</option>
                          <option value="claw6">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg6">Haggin (History 8)</option>
                          <option value="hami6">Hamilton (Chorus)</option>
                          <option value="haym6">Hayman (History 8)</option>
                          <option value="hsua6">Hsuan (Art 7/8)</option>
                          <option value="huyn6">Hyunh (PE 8)</option>
                          <option value="inga6">Ingah (Spanish 7/8)</option>
                          <option value="kess6">Kesselring (History 7)</option>
                          <option value="lee6">Lee (PE 7/8)</option>
                          <option value="mass6">Massaro (Geometry 8)</option>
                          <option value="mcfa6">McFarland (Science 7)</option>
                          <option value="mori6">Morimoto (Silent Study 7/8)</option>
                          <option value="musi6">Musich (English 8)</option>
                          <option value="nguy6">Nguyen (English 7)</option>
                          <option value="olar6">Olarig (Science 8)</option>
                          <option value="osbe6">Osberg (Science 8)</option>
                          <option value="past6">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec6">Spector (Music 7/8)</option>
                          <option value="swen6">Swenson (A Lot 7/8)</option>
                          <option value="truo6">Truong (Science 7)</option>
                          <option value="vaid6">Vaidyanathan (CS 7/8)</option>
                          <option value="vall6">Vallez (History 7)</option>
                          <option value="vida6">Vidales (Math 7/8)</option>
                          <option value="wulf6">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca6">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane6">Zanette (English 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Seventh Period Teacher: <select name="role[]" multiple>
                          <option value="asun7">Asuncion (Math 7/8)</option>
                          <option value="bruz7">Bruzelius (English 8)</option>
                          <option value="chia7">Chiang (Mandarin 7/8)</option>
                          <option value="clav7">Clavijo (French, Drama)</option>
                          <option value="claw7">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="hagg7">Haggin (History 8)</option>
                          <option value="hami7">Hamilton (Chorus)</option>
                          <option value="haym7">Hayman (History 8)</option>
                          <option value="hsua7">Hsuan (Art 7/8)</option>
                          <option value="huyn7">Hyunh (PE 8)</option>
                          <option value="inga7">Ingah (Spanish 7/8)</option>
                          <option value="kess7">Kesselring (History 7)</option>
                          <option value="lee7">Lee (PE 7/8)</option>
                          <option value="mass7">Massaro (Geometry 8)</option>
                          <option value="mcfa7">McFarland (Science 7)</option>
                          <option value="mori7">Morimoto (Silent Study 7/8)</option>
                          <option value="musi7">Musich (English 8)</option>
                          <option value="nguy7">Nguyen (English 7)</option>
                          <option value="olar7">Olarig (Science 8)</option>
                          <option value="osbe7">Osberg (Science 8)</option>
                          <option value="past7">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="spec7">Spector (Music 7/8)</option>
                          <option value="swen7">Swenson (A Lot 7/8)</option>
                          <option value="truo7">Truong (Science 7)</option>
                          <option value="vaid7">Vaidyanathan (CS 7/8)</option>
                          <option value="vall7">Vallez (History 7)</option>
                          <option value="vida7">Vidales (Math 7/8)</option>
                          <option value="wulf7">Wulfsohn (Spanish 7/8)</option>
                          <option value="zaca7">Zacanti (PE/Health/Leadership 7/8)</option>
                          <option value="zane7">Zanette (English 7)</option>
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
