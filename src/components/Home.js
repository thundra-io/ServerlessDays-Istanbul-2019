import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import { HashLink as Link } from 'react-router-hash-link';
import Scrollchor from 'react-scrollchor';
import ScrollableAnchor from 'react-scrollable-anchor';
import Map from './Map';

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <ScrollableAnchor id={'home'}>
            <div className='center-align'>
              <h2 className='center-align shrinkme'>ServerlessDays in İstanbul</h2>
              <div className='titleHR' />
            </div>
          </ScrollableAnchor>
          <div className='container'>
            <h2 className='center-align'>Schedule</h2>
            <table class="striped text-medium">
                <thead>
                  <tr>
                    <th width="250">Time</th>
                    <th width="750">Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>08:30 - 09:00</td>
                      <td>Reception and Breakfast</td>
                  </tr>
                  <tr>
                      <td>09:00 - 09:15</td>
                      <td>Opening Remarks</td>
                  </tr>
                  <tr>
                      <td>09:15 - 10:00</td>
                      <td>Danilo Poccia, Diving deep into the event-driven side of Serverless</td>
                  </tr>
                  <tr>
                      <td>10:00 - 10:30</td>
                      <td>Mete Atamel, Serverless Containers with Knative and Cloud Run</td>
                  </tr>
                  <tr>
                      <td>10:30 - 10:45</td>
                      <td>Coffee break</td>
                  </tr>
                  <tr>
                      <td>10:45 - 11:15</td>
                      <td>Mohamed Labouardy, Lessons Learned while going serverless in production</td>
                  </tr>
                  <tr>
                      <td>11:15 - 11:45</td>
                      <td>Syed Sarjeel Yusuf, Better IoT with Serverless GraphQL</td>
                  </tr>
                  <tr>
                      <td>11:45 - 12:15</td>
                      <td>Kas Perch, Breaking out of the Serverless Container with V8</td>
                  </tr>
                  <tr>
                      <td>12:15 - 13:30</td>
                      <td>Lunch break</td>
                  </tr>
                  <tr>
                      <td>13:30 - 14:00</td>
                      <td>Daron Yondem, What comes after your first function in serverless?</td>
                  </tr>
                  <tr>
                      <td>14:00 - 14:30</td>
                      <td>Eric Johnson, Thinking Asynchronously</td>
                  </tr>
                  <tr>
                      <td>14:30 - 14:45</td>
                      <td>Coffee break</td>
                  </tr>
                  <tr>
                      <td>14:45 - 15:15</td>
                      <td>Mehmet Taşkıner, Collect and analyze data: The Cheaper Way</td>
                  </tr>
                  <tr>
                      <td>15:15 - 15:45</td>
                      <td>Arto Liukkonen, Serverless Superpowers for Frontend Developers</td>
                  </tr>
                  <tr>
                      <td>15:45 - 16:00</td>
                      <td>Coffee Break</td>
                  </tr>
                  <tr>
                      <td>16:00 - 16:45</td>
                      <td>Slobodan Stojanovic, Modern Art of Serverless Architecture</td>
                  </tr>
                  <tr>
                      <td>16:45 - 17:00</td>
                      <td>Closing Remarks</td>
                  </tr>
                </tbody>
              </table>
          </div>
          <Row>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'./media/unicorn_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Real world solutions</h4>
              <p>Hone your cloud skills and learn the power of serverless during the conference dedicated to the serverless development community.</p>
            </Col>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'./media/anteater_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Serverless for everyone</h4>
              <p>The single day, single track conference for everyone where real users showcase their solutions to common problems using serverless platforms.</p>
            </Col>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'./media/moth_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Join the community</h4>
              <p>Whether you're a beginner or an expert, meet like-minded people and build your network in this global cloud society.</p>
            </Col>
          </Row>
          <div className='space' />
          <div className='container speaker-pics'>
            <h2 className='center-align'>Speakers</h2>
            <Row>
              <Col s={4} l={6} className='center-align'>
                <Link to='/speakers#danilo'>
                  <img src={'./media/speakers/danilo.jpeg'} alt={'Danilo Poccia'} className='responsive-img circle' />
                  <h5>Danilo<br />Poccia</h5>
                  <p>AWS</p>
                </Link>
              </Col>
              <Col s={4} l={6} className='center-align'>
                <Link to='/speakers#slobodan'>
                  <img src={'./media/speakers/slobodan.jpeg'} alt={'Slobodan Stojanović'} className='responsive-img circle' />
                  <h5>Slobodan<br />Stojanović</h5>
                  <p>Cloud Horizon & Vacation Tracker</p>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col s={4} l={4} className='center-align'>
                <Link to='/speakers#kassian'>
                  <img src={'./media/speakers/kassian.jpg'} alt={'Mx. Kassian Perch'} className='responsive-img circle' />
                  <h5>Kassian<br />Perch</h5>
                  <p>Cloudflare</p>
                </Link>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <Link to='/speakers#daron'>
                  <img src={'./media/speakers/daron.png'} alt={'Daron Yondem'} className='responsive-img circle' />
                  <h5>Daron<br />Yondem</h5>
                  <p>XOGO and Microsoft MVP</p>
                </Link>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <Link to='/speakers#mete'>
                  <img src={'./media/speakers/mete.jpg'} alt={'Mete Atamel'} className='responsive-img circle' />
                  <h5>Mete<br />Atamel</h5>
                  <p>Google</p>
                </Link>
              </Col>
            </Row>
            <Row> 
              <Col s={4} l={4} className='center-align'>
                <Link to='/speakers#eric'>
                  <img src={'./media/speakers/eric.jpg'} alt={'Eric Johnson'} className='responsive-img circle' />
                  <h5>Eric<br />Johnson</h5>
                  <p>AWS</p>
                </Link>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <Link to='/speakers#sarjeel'>
                  <img src={'./media/speakers/sarjeel.jpeg'} alt={'Syed Sarjeel Yusuf'} className='responsive-img circle' />
                  <h5>Syed Sarjeel<br />Yusuf</h5>
                  <p>Atlassian</p>
                </Link>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <Link to='/speakers#mehmet'>
                  <img src={'./media/speakers/mehmet.jpg'} alt={'Mehmet Taşkıner'} className='responsive-img circle' />
                  <h5>Mehmet<br />Taşkıner</h5>
                  <p>Getir</p>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col s={4} l={6} className='center-align'>
                <Link to='/speakers#arto'>
                  <img src={'./media/speakers/arto.png'} alt={'Arto Liukkonen'} className='responsive-img circle' />
                  <h5>Arto<br />Liukkonen</h5>
                  <p>Nordcloud</p>
                </Link>
              </Col>
              <Col s={4} l={6} className='center-align'>
                <Link to='/speakers#arto'>
                  <img src={'./media/speakers/mohamed.jpeg'} alt={'Mohamed Labouardy'} className='responsive-img circle' />
                  <h5>Mohamed<br />Labouardy</h5>
                  <p>FoxIntelligence</p>
                </Link>
              </Col>
            </Row>
            <div className='center-align'>
              <Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='btn-large btn-red top-marg' to='/speakers'>View Speakers</Link></Scrollchor>
            </div>
          </div>
          <div className='space' />
          <div className='container'>
            <h2 className='center-align'>Join us in İstanbul!</h2>
            <p>ServerlessDays İstanbul will take place at <a href='http://khas.edu.tr/en' target='_blank' rel='noopener noreferrer'>Kadir Has University</a> in İstanbul on Thursday, October 03, 2019. View the full event schedule <Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link to='/schedule'>here</Link></Scrollchor>.</p>
            <p>Kadir Has University at <br />Cibali Mah. Hisaraltı Cad. No:17 <br /> Fatih, İstanbul / Turkey, 34083</p>
            <div className='space' />
          </div>
        </div>
        <div className='map-div'>
          <Map />
        </div>
      </div>
    );
  }
}

export default Home;
