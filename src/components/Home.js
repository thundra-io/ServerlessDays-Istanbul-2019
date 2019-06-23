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
        <div className='container' id='top'>aws
          <ScrollableAnchor id={'home'}>
            <div className='center-align'>
              <h2 className='center-align shrinkme'>ServerlessDays in İstanbul</h2>
              <div className='titleHR' />
            </div>
          </ScrollableAnchor>
          <div className='container'>
            <h2 className='center-align'>Dates</h2>
              <table class="striped text-medium">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>20th of June</td>
                      <td>CFP Opens</td>
                  </tr>
                  <tr>
                      <td>20th of July</td>
                      <td>Tickets Go on Sale</td>
                  </tr>
                  <tr>
                      <td>20th of August</td>
                      <td>CFP Closes</td>
                  </tr>
                  <tr>
                      <td>1st of September</td>
                      <td>Schedule Announced</td>
                  </tr>
                  <tr>
                      <td>3rd Of October</td>
                      <td>The Event Date</td>
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
              <Col s={4} l={4} className='center-align'>
                <Link to='/speakers#danilo'>
                  <img src={'./media/speakers/danilo.jpeg'} alt={'Danilo Poccia'} className='responsive-img circle' />
                  <h5>Danilo Poccia</h5>
                  <p>AWS</p>
                </Link>
              </Col>
              <Col s={4} l={4} className='center-align'>
                <Link to='/speakers#slobodan'>
                  <img src={'./media/speakers/slobodan.jpeg'} alt={'Slobodan Stojanović'} className='responsive-img circle' />
                  <h5>Slobodan Stojanović</h5>
                  <p>Cloud Horizon & Vacation Tracker</p>
                </Link>
              </Col>
            </Row>
            <div className='center-align'>
              <p>More is coming ...</p>
            </div>
            <div className='center-align'>
              <Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='btn-large btn-red top-marg' to='/speakers'>View Speakers</Link></Scrollchor>
            </div>
          </div>
          <div className='space' />
          <div className='container'>
            <h2 className='center-align'>Want to be a speaker?</h2>
            <div className='center-align'>
              <a className='btn-large btn-red top-marg' href={'https://www.papercall.io/cfps/2342/submissions/new'} target='_blank' rel='noopener noreferrer'>Submit</a>
            </div>
          </div>
          <div className='space' />
          <div className='container'>
            <h2 className='center-align'>Join us in İstanbul!</h2>
            <p>ServerlessDays İstanbul will take place at <a href='http://khas.edu.tr/en' target='_blank' rel='noopener noreferrer'>Kadir Has University</a> in İstanbul on Friday, October 03, 2019. View the full event schedule <Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link to='/schedule'>here</Link></Scrollchor>.</p>
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
