import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Speakers extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container'>
          <div className='center-align'>
            <h2 className='center-align'>Speakers</h2>
            <div className='titleHR' />
          </div>
          <Row>
            <Col s={12} l={12} id='danilo'>
              <h4 className='top-marg'>Danilo Poccia</h4>
              <h5 className='company'>AWS</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Danilo Poccia is a Technical Evangelist at Amazon Web Services. As a builder of AWS Lambda tools that simplify authentication and integrate AWS resources with external event-driven services, he is a frequent speaker at public events and technical workshops.</p>
              <h5><a href='https://www.twitter.com/danilop' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/dpoccia/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/danilo.jpeg'} alt={'Danilo Poccia'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='slobodan'>
              <h4 className='top-marg'>Slobodan Stojanović</h4>
              <h5 className='company'>Cloud Horizon & Vacation Tracker</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Slobodan Stojanović is CTO of Cloud Horizon, a software development studio based in Montreal, Canada. He is based in Belgrade, Serbia and is the JS Belgrade meetup co-organizer.</p>
              <h5><a href='https://twitter.com/slobodan_' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/sstojanovic/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/slobodan.jpeg'} alt={'Slobodan Stojanović'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <div className='space-foot' />
          {/* <p>Want to find out who's speaking as soon as they're announced? Sign up for our <a data-target='signupModal' className='modal-trigger'>mailing list</a> to be notified.</p> */}
        </div>
      </div>
    );
  }
}

export default Speakers;
