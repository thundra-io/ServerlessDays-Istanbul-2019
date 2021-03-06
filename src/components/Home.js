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
