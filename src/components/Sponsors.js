import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Sponsors extends Component {
  render () {
    return (
      <div className='container sponsors' id='top'>
        <div className='container'>
          <div className='center-align'>
            <h2>Sponsors</h2>
            <div className='titleHR' />
          </div>
          <Row className='valign-wrapper top-marg'>
            <Col s={12} l={0}>
              <a href='https://www.thundra.io' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/thundra.svg'} alt={'Thundra'} className='responsive-img' /></a>
            </Col>
          </Row>
          <div className='small-space'></div>
          <div className='divider' />
          <h3 className='center-align'>Sponsor ServerlessDays İstanbul</h3>
          <h4>Become a sponsor!</h4>
          <p>ServerlessDays is a community-focused, single-track, one-day event that moves away from the hype and focuses on the reality serverless-based solutions. It’s about fostering a community locally and helping all of us learn from each other as we embrace a new way of building applications.</p>
          <p>As a community event, ServerlessDays could not exist without sponsors. We are currently offering sponsorship packages for the İstanbul ServerlessDays event. Together we can create a unique and meaningful experience for our attendees.</p>
          <p>We’d love to have you as a sponsor! To become a sponsor or learn more, please contact <a href='mailto:istanbul@serverlessdays.io'>istanbul@serverlessdays.io</a></p>
          <div className='center-align'>
            <a className='btn-large btn-red top-marg' href={'./media/ServerlessDays Istanbul 2019 Sponsorship Prospectus.pdf'} target='_blank' rel='noopener noreferrer' download>Sponsor Prospectus</a>
          </div>
          <div className='space-foot' />
        </div>
      </div>
    );
  }
}

export default Sponsors;
