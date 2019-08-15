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
                          <option value="P1 Asuncion">Asuncion (Math 7/8)</option>
                          <option value="P1 Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="P1 Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="P1 Clavijo">Clavijo (French, Drama)</option>
                          <option value="P1 Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="P1 Haggin">Haggin (History 8)</option>
                          <option value="P1 Hamilton">Hamilton (Chorus)</option>
                          <option value="P1 Hayman">Hayman (History 8)</option>
                          <option value="P1 Hsuan">Hsuan (Art 7/8)</option>
                          <option value="P1 Huynh">Hyunh (Pe 8)</option>
                          <option value="P1 Ingah">Ingah (Spanish 7/8)</option>
                          <option value="P1 Kesselring">Kesselring (History 7)</option>
                          <option value="P1 Lee">Lee (Pe 7/8)</option>
                          <option value="P1 Massaro">Massaro (Geometry 8)</option>
                          <option value="P1 McFarland">McFarland (Science 7)</option>
                          <option value="P1 Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="P1 Musich">Musich (english 8)</option>
                          <option value="P1 Nguyen">Nguyen (english 7)</option>
                          <option value="P1 Olarig">Olarig (Science 8)</option>
                          <option value="P1 Osberg">Osberg (Science 8)</option>
                          <option value="P1 Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="P1 Spector">Spector (Music 7/8)</option>
                          <option value="P1 Swenson">Swenson (A Lot 7/8)</option>
                          <option value="P1 Truong">Truong (Science 7)</option>
                          <option value="P1 Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="P1 Vallez">Vallez (History 7)</option>
                          <option value="P1 Vidales">Vidales (Math 7/8)</option>
                          <option value="P1 Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="P1 Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="P1 Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Second Period Teacher: <select name="p2" multiple>
                          <option value="P2 Asuncion">Asuncion (Math 7/8)</option>
                          <option value="P2 Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="P2 Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="P2 Clavijo">Clavijo (French, Drama)</option>
                          <option value="P2 Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="P2 Haggin">Haggin (History 8)</option>
                          <option value="P2 Hamilton">Hamilton (Chorus)</option>
                          <option value="P2 Hayman">Hayman (History 8)</option>
                          <option value="P2 Hsuan">Hsuan (Art 7/8)</option>
                          <option value="P2 Huynh">Hyunh (Pe 8)</option>
                          <option value="P2 Ingah">Ingah (Spanish 7/8)</option>
                          <option value="P2 Kesselring">Kesselring (History 7)</option>
                          <option value="P2 Lee">Lee (Pe 7/8)</option>
                          <option value="P2 Massaro">Massaro (Geometry 8)</option>
                          <option value="P2 McFarland">McFarland (Science 7)</option>
                          <option value="P2 Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="P2 Musich">Musich (english 8)</option>
                          <option value="P2 Nguyen">Nguyen (english 7)</option>
                          <option value="P2 Olarig">Olarig (Science 8)</option>
                          <option value="P2 Osberg">Osberg (Science 8)</option>
                          <option value="P2 Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="P2 Spector">Spector (Music 7/8)</option>
                          <option value="P2 Swenson">Swenson (A Lot 7/8)</option>
                          <option value="P2 Truong">Truong (Science 7)</option>
                          <option value="P2 Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="P2 Vallez">Vallez (History 7)</option>
                          <option value="P2 Vidales">Vidales (Math 7/8)</option>
                          <option value="P2 Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="P2 Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="P2 Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Third Period Teacher: <select name="p3" multiple>
                          <option value="P3 Asuncion">Asuncion (Math 7/8)</option>
                          <option value="P3 Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="P3 Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="P3 Clavijo">Clavijo (French, Drama)</option>
                          <option value="P3 Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="P3 Haggin">Haggin (History 8)</option>
                          <option value="P3 Hamilton">Hamilton (Chorus)</option>
                          <option value="P3 Hayman">Hayman (History 8)</option>
                          <option value="P3 Hsuan">Hsuan (Art 7/8)</option>
                          <option value="P3 Huynh">Hyunh (Pe 8)</option>
                          <option value="P3 Ingah">Ingah (Spanish 7/8)</option>
                          <option value="P3 Kesselring">Kesselring (History 7)</option>
                          <option value="P3 Lee">Lee (Pe 7/8)</option>
                          <option value="P3 Massaro">Massaro (Geometry 8)</option>
                          <option value="P3 McFarland">McFarland (Science 7)</option>
                          <option value="P3 Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="P3 Musich">Musich (english 8)</option>
                          <option value="P3 Nguyen">Nguyen (english 7)</option>
                          <option value="P3 Olarig">Olarig (Science 8)</option>
                          <option value="P3 Osberg">Osberg (Science 8)</option>
                          <option value="P3 Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="P3 Spector">Spector (Music 7/8)</option>
                          <option value="P3 Swenson">Swenson (A Lot 7/8)</option>
                          <option value="P3 Truong">Truong (Science 7)</option>
                          <option value="P3 Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="P3 Vallez">Vallez (History 7)</option>
                          <option value="P3 Vidales">Vidales (Math 7/8)</option>
                          <option value="P3 Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="P3 Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="P3 Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Fourth Period Teacher: <select name="p4" multiple>
                          <option value="P4 Asuncion">Asuncion (Math 7/8)</option>
                          <option value="P4 Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="P4 Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="P4 Clavijo">Clavijo (French, Drama)</option>
                          <option value="P4 Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="P4 Haggin">Haggin (History 8)</option>
                          <option value="P4 Hamilton">Hamilton (Chorus)</option>
                          <option value="P4 Hayman">Hayman (History 8)</option>
                          <option value="P4 Hsuan">Hsuan (Art 7/8)</option>
                          <option value="P4 Huynh">Hyunh (Pe 8)</option>
                          <option value="P4 Ingah">Ingah (Spanish 7/8)</option>
                          <option value="P4 Kesselring">Kesselring (History 7)</option>
                          <option value="P4 Lee">Lee (Pe 7/8)</option>
                          <option value="P4 Massaro">Massaro (Geometry 8)</option>
                          <option value="P4 McFarland">McFarland (Science 7)</option>
                          <option value="P4 Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="P4 Musich">Musich (english 8)</option>
                          <option value="P4 Nguyen">Nguyen (english 7)</option>
                          <option value="P4 Olarig">Olarig (Science 8)</option>
                          <option value="P4 Osberg">Osberg (Science 8)</option>
                          <option value="P4 Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="P4 Spector">Spector (Music 7/8)</option>
                          <option value="P4 Swenson">Swenson (A Lot 7/8)</option>
                          <option value="P4 Truong">Truong (Science 7)</option>
                          <option value="P4 Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="P4 Vallez">Vallez (History 7)</option>
                          <option value="P4 Vidales">Vidales (Math 7/8)</option>
                          <option value="P4 Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="P4 Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="P4 Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Fifth Period Teacher: <select name="p5" multiple>
                          <option value="P5 Asuncion">Asuncion (Math 7/8)</option>
                          <option value="P5 Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="P5 Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="P5 Clavijo">Clavijo (French, Drama)</option>
                          <option value="P5 Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="P5 Haggin">Haggin (History 8)</option>
                          <option value="P5 Hamilton">Hamilton (Chorus)</option>
                          <option value="P5 Hayman">Hayman (History 8)</option>
                          <option value="P5 Hsuan">Hsuan (Art 7/8)</option>
                          <option value="P5 Huynh">Hyunh (Pe 8)</option>
                          <option value="P5 Ingah">Ingah (Spanish 7/8)</option>
                          <option value="P5 Kesselring">Kesselring (History 7)</option>
                          <option value="P5 Lee">Lee (Pe 7/8)</option>
                          <option value="P5 Massaro">Massaro (Geometry 8)</option>
                          <option value="P5 McFarland">McFarland (Science 7)</option>
                          <option value="P5 Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="P5 Musich">Musich (english 8)</option>
                          <option value="P5 Nguyen">Nguyen (english 7)</option>
                          <option value="P5 Olarig">Olarig (Science 8)</option>
                          <option value="P5 Osberg">Osberg (Science 8)</option>
                          <option value="P5 Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="P5 Spector">Spector (Music 7/8)</option>
                          <option value="P5 Swenson">Swenson (A Lot 7/8)</option>
                          <option value="P5 Truong">Truong (Science 7)</option>
                          <option value="P5 Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="P5 Vallez">Vallez (History 7)</option>
                          <option value="P5 Vidales">Vidales (Math 7/8)</option>
                          <option value="P5 Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="P5 Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="P5 Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Sixth Period Teacher: <select name="p6" multiple>
                          <option value="P6 Asuncion">Asuncion (Math 7/8)</option>
                          <option value="P6 Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="P6 Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="P6 Clavijo">Clavijo (French, Drama)</option>
                          <option value="P6 Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="P6 Haggin">Haggin (History 8)</option>
                          <option value="P6 Hamilton">Hamilton (Chorus)</option>
                          <option value="P6 Hayman">Hayman (History 8)</option>
                          <option value="P6 Hsuan">Hsuan (Art 7/8)</option>
                          <option value="P6 Huynh">Hyunh (Pe 8)</option>
                          <option value="P6 Ingah">Ingah (Spanish 7/8)</option>
                          <option value="P6 Kesselring">Kesselring (History 7)</option>
                          <option value="P6 Lee">Lee (Pe 7/8)</option>
                          <option value="P6 Massaro">Massaro (Geometry 8)</option>
                          <option value="P6 McFarland">McFarland (Science 7)</option>
                          <option value="P6 Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="P6 Musich">Musich (english 8)</option>
                          <option value="P6 Nguyen">Nguyen (english 7)</option>
                          <option value="P6 Olarig">Olarig (Science 8)</option>
                          <option value="P6 Osberg">Osberg (Science 8)</option>
                          <option value="P6 Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="P6 Spector">Spector (Music 7/8)</option>
                          <option value="P6 Swenson">Swenson (A Lot 7/8)</option>
                          <option value="P6 Truong">Truong (Science 7)</option>
                          <option value="P6 Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="P6 Vallez">Vallez (History 7)</option>
                          <option value="P6 Vidales">Vidales (Math 7/8)</option>
                          <option value="P6 Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="P6 Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="P6 Zanette">Zanette (english 7)</option>
                        </select></label>
                      </p>
                      <p>
                        <label>Your Seventh Period Teacher: <select name="p7" multiple>
                          <option value="P7 Asuncion">Asuncion (Math 7/8)</option>
                          <option value="P7 Bruzelius">Bruzeliuselius (english 8)</option>
                          <option value="P7 Chiang">Chiang (Mandarin 7/8)</option>
                          <option value="P7 Clavijo">Clavijo (French, Drama)</option>
                          <option value="P7 Clawson">Clawson (Photography, Digital Broadcasting/Journalism)</option>
                          <option value="P7 Haggin">Haggin (History 8)</option>
                          <option value="P7 Hamilton">Hamilton (Chorus)</option>
                          <option value="P7 Hayman">Hayman (History 8)</option>
                          <option value="P7 Hsuan">Hsuan (Art 7/8)</option>
                          <option value="P7 Huynh">Hyunh (Pe 8)</option>
                          <option value="P7 Ingah">Ingah (Spanish 7/8)</option>
                          <option value="P7 Kesselring">Kesselring (History 7)</option>
                          <option value="P7 Lee">Lee (Pe 7/8)</option>
                          <option value="P7 Massaro">Massaro (Geometry 8)</option>
                          <option value="P7 McFarland">McFarland (Science 7)</option>
                          <option value="P7 Morimoto">Morimoto (Silent Study 7/8)</option>
                          <option value="P7 Musich">Musich (english 8)</option>
                          <option value="P7 Nguyen">Nguyen (english 7)</option>
                          <option value="P7 Olarig">Olarig (Science 8)</option>
                          <option value="P7 Osberg">Osberg (Science 8)</option>
                          <option value="P7 Pasturel">Pasturel (Algebra/CC8 7/8)</option>
                          <option value="P7 Spector">Spector (Music 7/8)</option>
                          <option value="P7 Swenson">Swenson (A Lot 7/8)</option>
                          <option value="P7 Truong">Truong (Science 7)</option>
                          <option value="P7 Vaidyanathan">Vaidyanathan (CS 7/8)</option>
                          <option value="P7 Vallez">Vallez (History 7)</option>
                          <option value="P7 Vidales">Vidales (Math 7/8)</option>
                          <option value="P7 Wulfsohn">Wulfsohn (Spanish 7/8)</option>
                          <option value="P7 Zacanti">Zacanti (Pe/Health/Leadership 7/8)</option>
                          <option value="P7 Zanette">Zanette (english 7)</option>
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



