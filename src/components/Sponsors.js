import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Sponsors extends Component {
  render () {
    return (
      <div className='container sponsors' id='top'>
        <div className='container' style={{width: 900}}>
          <div className='center-align'>
            <h2>Sponsors</h2>
            <div className='titleHR' />
          </div>
          <h3 className='center-align'>Gold Sponsors</h3>
          <Row className='valign-wrapper top-marg'>
            <Col s={12} l={4} className='center-align'>
              <a href='https://aws.amazom.com' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/aws.png'} alt={'AWS'} height={150} width={300} /></a>
            </Col>
            <Col s={12} l={4}>
              <a href='https://cloud.google.com/' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/google-cloud.png'} alt={'Google'} height={150} width={300} /></a>
            </Col>
            <Col s={12} l={1}></Col>
            <Col s={12} l={4}>
              <a href='https://microsoft.com/' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/microsoft.png'} alt={'Microsoft'} height={150} width={300} /></a>
            </Col>
            <Col s={12} l={1}></Col>
          </Row>
          <Row className='valign-wrapper top-marg'>
            <Col s={12} l={12} className='center-align'>
                <a href='https://www.thundra.io' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/thundra.png'} alt={'Thundra'} height={300} width={300} /></a>
            </Col>
          </Row>
          <div className='small-space'></div>
          <h4 className='center-align'>Silver Sponsors</h4>
          <Row className='valign-wrapper top-marg'>
            <Col s={12} l={6}></Col>
            <Col s={12} l={4}>
              <a href='https://image4.io' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/image4io.jpeg'} alt={'Image4IO'} height={100}/></a>
            </Col>
            <Col s={12} l={4}>
              <a href='https://www.getir.com' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/getir.png'} alt={'Getir'} height={100} /></a>
            </Col>
            <Col s={12} l={6}></Col>
          </Row>
          <div className='small-space'></div>
          <h5 className='center-align'>Community Sponsors</h5>
          <Row className='valign-wrapper top-marg'>
            <Col s={12} l={5}>
              <a href='https://www.meetup.com/Serverless-Turkey' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/serverless-turkey.png'} alt={'Serverless Turkey Meetup'} className='responsive-img' /></a>
            </Col>
            <Col s={12} l={5}>
              <a href='https://www.meetup.com/AWS-User-Group-Turkey' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/aws-user-group-turkey.png'} alt={'AWS User Group Turkey'} className='responsive-img' /></a>
            </Col>
            <Col s={12} l={6}>
              <a href='https://devopsturkey.org' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/devops-turkey.png'} alt={'Devops Turkey'} className='responsive-img' /></a>
            </Col>
            <Col s={12} l={6}>
              <a href='https://www.meetup.com/Software-Craftsmanship-Turkey' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/sc-turkey.jpg'} alt={'Software Craftsmanship Turkey'} className='responsive-img' /></a>
            </Col>
            <Col s={12} l={6}>
              <a href='devnot.com' target='_blank' rel='noopener noreferrer'><img src={'./media/sponsors/devnot.png'} alt={'Devnot'} className='responsive-img' /></a>
            </Col>
          </Row>
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
