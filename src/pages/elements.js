import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic0 from '../assets/images/pic0.jpg'

const elements = (props) => (
    <Layout>
        <Helmet>
            <title>elements - Forty by HTMl UP</title>
            <meta name="description" content="elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>How could you make egan better?</h1>
                    </header>
                    <h3>Do you have any suggestions to improve our school? Please send it using the form below. I will read each message sent, and if I am elected, I will do my best to act on them! Thank you in advance for your suggestions.</h3>
                    <form name="contact" method="POST" data-netlify="true" action="/elements">
                    <input type="hidden" name="form-name" value="contact" />
                      <p>
                        <label>Your Name (First and Last): <input type="text" name="name" /></label>   
                      </p>
                      <p>
                        <label>Your Homeroom Teacher: <select name="hr" multiple>
                          <option value="Asuncion">Asuncion (Math 7/8)</option>
                          <option value="Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="Clavijo">Clavijo (French, Drama)</option>
                          <option value="Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="Haggin">Haggin (History 8)</option>
                          <option value="Hamilton">Hamilton (Chorus)</option>
                          <option value="Hayman">Hayman (History 8)</option>
                          <option value="Hsuan">Hsuan (Art 7/8)</option>
                          <option value="Huynh">Hyunh (Pe 8)</option>
                          <option value="Ingah">Ingah (Spanish 7/8)</option>
                          <option value="Kesselring">Kesselring (History 7)</option>
                          <option value="Lee">Lee (Pe 7/8)</option>
                          <option value="Massaro">Massaro (Geometry 8)</option>
                          <option value="McFarland">McFarland (Science 7)</option>
                          <option value="Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="Musich">Musich (english 8)</option>
                          <option value="Nguyen">Nguyen (english 7)</option>
                          <option value="Olarig">Olarig (Science 8)</option>
                          <option value="Osberg">Osberg (Science 8)</option>
                          <option value="Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="Spector">Spector (Music 7/8)</option>
                          <option value="Swenson">Swenson (A Lot 7/8)</option>
                          <option value="Truong">Truong (Science 7)</option>
                          <option value="Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="Vallez">Vallez (History 7)</option>
                          <option value="Vidales">Vidales (Math 7/8)</option>
                          <option value="Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your First Period Teacher: <select name="p1" multiple>
                          <option value="Asuncion">Asuncion (Math 7/8)</option>
                          <option value="Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="Clavijo">Clavijo (French, Drama)</option>
                          <option value="Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="Haggin">Haggin (History 8)</option>
                          <option value="Hamilton">Hamilton (Chorus)</option>
                          <option value="Hayman">Hayman (History 8)</option>
                          <option value="Hsuan">Hsuan (Art 7/8)</option>
                          <option value="Huynh">Hyunh (Pe 8)</option>
                          <option value="Ingah">Ingah (Spanish 7/8)</option>
                          <option value="Kesselring">Kesselring (History 7)</option>
                          <option value="Lee">Lee (Pe 7/8)</option>
                          <option value="Massaro">Massaro (Geometry 8)</option>
                          <option value="McFarland">McFarland (Science 7)</option>
                          <option value="Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="Musich">Musich (english 8)</option>
                          <option value="Nguyen">Nguyen (english 7)</option>
                          <option value="Olarig">Olarig (Science 8)</option>
                          <option value="Osberg">Osberg (Science 8)</option>
                          <option value="Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="Spector">Spector (Music 7/8)</option>
                          <option value="Swenson">Swenson (A Lot 7/8)</option>
                          <option value="Truong">Truong (Science 7)</option>
                          <option value="Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="Vallez">Vallez (History 7)</option>
                          <option value="Vidales">Vidales (Math 7/8)</option>
                          <option value="Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Second Period Teacher: <select name="p2" multiple>
                          <option value="Asuncion">Asuncion (Math 7/8)</option>
                          <option value="Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="Clavijo">Clavijo (French, Drama)</option>
                          <option value="Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="Haggin">Haggin (History 8)</option>
                          <option value="Hamilton">Hamilton (Chorus)</option>
                          <option value="Hayman">Hayman (History 8)</option>
                          <option value="Hsuan">Hsuan (Art 7/8)</option>
                          <option value="Huynh">Hyunh (Pe 8)</option>
                          <option value="Ingah">Ingah (Spanish 7/8)</option>
                          <option value="Kesselring">Kesselring (History 7)</option>
                          <option value="Lee">Lee (Pe 7/8)</option>
                          <option value="Massaro">Massaro (Geometry 8)</option>
                          <option value="McFarland">McFarland (Science 7)</option>
                          <option value="Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="Musich">Musich (english 8)</option>
                          <option value="Nguyen">Nguyen (english 7)</option>
                          <option value="Olarig">Olarig (Science 8)</option>
                          <option value="Osberg">Osberg (Science 8)</option>
                          <option value="Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="Spector">Spector (Music 7/8)</option>
                          <option value="Swenson">Swenson (A Lot 7/8)</option>
                          <option value="Truong">Truong (Science 7)</option>
                          <option value="Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="Vallez">Vallez (History 7)</option>
                          <option value="Vidales">Vidales (Math 7/8)</option>
                          <option value="Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Third Period Teacher: <select name="p3" multiple>
                          <option value="Asuncion">Asuncion (Math 7/8)</option>
                          <option value="Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="Clavijo">Clavijo (French, Drama)</option>
                          <option value="Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="Haggin">Haggin (History 8)</option>
                          <option value="Hamilton">Hamilton (Chorus)</option>
                          <option value="Hayman">Hayman (History 8)</option>
                          <option value="Hsuan">Hsuan (Art 7/8)</option>
                          <option value="Huynh">Hyunh (Pe 8)</option>
                          <option value="Ingah">Ingah (Spanish 7/8)</option>
                          <option value="Kesselring">Kesselring (History 7)</option>
                          <option value="Lee">Lee (Pe 7/8)</option>
                          <option value="Massaro">Massaro (Geometry 8)</option>
                          <option value="McFarland">McFarland (Science 7)</option>
                          <option value="Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="Musich">Musich (english 8)</option>
                          <option value="Nguyen">Nguyen (english 7)</option>
                          <option value="Olarig">Olarig (Science 8)</option>
                          <option value="Osberg">Osberg (Science 8)</option>
                          <option value="Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="Spector">Spector (Music 7/8)</option>
                          <option value="Swenson">Swenson (A Lot 7/8)</option>
                          <option value="Truong">Truong (Science 7)</option>
                          <option value="Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="Vallez">Vallez (History 7)</option>
                          <option value="Vidales">Vidales (Math 7/8)</option>
                          <option value="Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Fourth Period Teacher: <select name="p4" multiple>
                          <option value="Asuncion">Asuncion (Math 7/8)</option>
                          <option value="Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="Clavijo">Clavijo (French, Drama)</option>
                          <option value="Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="Haggin">Haggin (History 8)</option>
                          <option value="Hamilton">Hamilton (Chorus)</option>
                          <option value="Hayman">Hayman (History 8)</option>
                          <option value="Hsuan">Hsuan (Art 7/8)</option>
                          <option value="Huynh">Hyunh (Pe 8)</option>
                          <option value="Ingah">Ingah (Spanish 7/8)</option>
                          <option value="Kesselring">Kesselring (History 7)</option>
                          <option value="Lee">Lee (Pe 7/8)</option>
                          <option value="Massaro">Massaro (Geometry 8)</option>
                          <option value="McFarland">McFarland (Science 7)</option>
                          <option value="Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="Musich">Musich (english 8)</option>
                          <option value="Nguyen">Nguyen (english 7)</option>
                          <option value="Olarig">Olarig (Science 8)</option>
                          <option value="Osberg">Osberg (Science 8)</option>
                          <option value="Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="Spector">Spector (Music 7/8)</option>
                          <option value="Swenson">Swenson (A Lot 7/8)</option>
                          <option value="Truong">Truong (Science 7)</option>
                          <option value="Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="Vallez">Vallez (History 7)</option>
                          <option value="Vidales">Vidales (Math 7/8)</option>
                          <option value="Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Fifth Period Teacher: <select name="p5" multiple>
                          <option value="Asuncion">Asuncion (Math 7/8)</option>
                          <option value="Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="Clavijo">Clavijo (French, Drama)</option>
                          <option value="Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="Haggin">Haggin (History 8)</option>
                          <option value="Hamilton">Hamilton (Chorus)</option>
                          <option value="Hayman">Hayman (History 8)</option>
                          <option value="Hsuan">Hsuan (Art 7/8)</option>
                          <option value="Huynh">Hyunh (Pe 8)</option>
                          <option value="Ingah">Ingah (Spanish 7/8)</option>
                          <option value="Kesselring">Kesselring (History 7)</option>
                          <option value="Lee">Lee (Pe 7/8)</option>
                          <option value="Massaro">Massaro (Geometry 8)</option>
                          <option value="McFarland">McFarland (Science 7)</option>
                          <option value="Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="Musich">Musich (english 8)</option>
                          <option value="Nguyen">Nguyen (english 7)</option>
                          <option value="Olarig">Olarig (Science 8)</option>
                          <option value="Osberg">Osberg (Science 8)</option>
                          <option value="Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="Spector">Spector (Music 7/8)</option>
                          <option value="Swenson">Swenson (A Lot 7/8)</option>
                          <option value="Truong">Truong (Science 7)</option>
                          <option value="Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="Vallez">Vallez (History 7)</option>
                          <option value="Vidales">Vidales (Math 7/8)</option>
                          <option value="Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Sixth Period Teacher: <select name="p6" multiple>
                          <option value="Asuncion">Asuncion (Math 7/8)</option>
                          <option value="Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="Clavijo">Clavijo (French, Drama)</option>
                          <option value="Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="Haggin">Haggin (History 8)</option>
                          <option value="Hamilton">Hamilton (Chorus)</option>
                          <option value="Hayman">Hayman (History 8)</option>
                          <option value="Hsuan">Hsuan (Art 7/8)</option>
                          <option value="Huynh">Hyunh (Pe 8)</option>
                          <option value="Ingah">Ingah (Spanish 7/8)</option>
                          <option value="Kesselring">Kesselring (History 7)</option>
                          <option value="Lee">Lee (Pe 7/8)</option>
                          <option value="Massaro">Massaro (Geometry 8)</option>
                          <option value="McFarland">McFarland (Science 7)</option>
                          <option value="Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="Musich">Musich (english 8)</option>
                          <option value="Nguyen">Nguyen (english 7)</option>
                          <option value="Olarig">Olarig (Science 8)</option>
                          <option value="Osberg">Osberg (Science 8)</option>
                          <option value="Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="Spector">Spector (Music 7/8)</option>
                          <option value="Swenson">Swenson (A Lot 7/8)</option>
                          <option value="Truong">Truong (Science 7)</option>
                          <option value="Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="Vallez">Vallez (History 7)</option>
                          <option value="Vidales">Vidales (Math 7/8)</option>
                          <option value="Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Seventh Period Teacher: <select name="p7" multiple>
                          <option value="Asuncion">Asuncion (Math 7/8)</option>
                          <option value="Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="Clavijo">Clavijo (French, Drama)</option>
                          <option value="Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="Haggin">Haggin (History 8)</option>
                          <option value="Hamilton">Hamilton (Chorus)</option>
                          <option value="Hayman">Hayman (History 8)</option>
                          <option value="Hsuan">Hsuan (Art 7/8)</option>
                          <option value="Huynh">Hyunh (Pe 8)</option>
                          <option value="Ingah">Ingah (Spanish 7/8)</option>
                          <option value="Kesselring">Kesselring (History 7)</option>
                          <option value="Lee">Lee (Pe 7/8)</option>
                          <option value="Massaro">Massaro (Geometry 8)</option>
                          <option value="McFarland">McFarland (Science 7)</option>
                          <option value="Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="Musich">Musich (english 8)</option>
                          <option value="Nguyen">Nguyen (english 7)</option>
                          <option value="Olarig">Olarig (Science 8)</option>
                          <option value="Osberg">Osberg (Science 8)</option>
                          <option value="Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="Spector">Spector (Music 7/8)</option>
                          <option value="Swenson">Swenson (A Lot 7/8)</option>
                          <option value="Truong">Truong (Science 7)</option>
                          <option value="Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="Vallez">Vallez (History 7)</option>
                          <option value="Vidales">Vidales (Math 7/8)</option>
                          <option value="Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="Zanette">Zanette (english 7)</option>
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

export default elements



