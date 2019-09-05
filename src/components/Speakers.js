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
          <Row>
            <Col s={12} l={12} id='kassian'>
              <h4 className='top-marg'>Mx. Kassian Perch</h4>
              <h5 className='company'>Cloudflare</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Kas (they/them pronouns) is a Developer Advocate for Cloudflare by day, and a roboticist, musician, and eternal student by night. They love serverless, electronics, and discussion.</p>
              <h5><a href='https://twitter.com/nodebotanist' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/kassian.jpg'} alt={'Mx. Kassian Perch'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='space-foot' />
          <Row>
            <Col s={12} l={12} id='daron'>
              <h4 className='top-marg'>Daron Yondem</h4>
              <h5 className='company'>XOGO and Microsoft MVP</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Daron Yondem is a Microsoft Regional Director and an Azure MVP. He is a regular speaker at international conferences focusing on Microservices, Serverless, and IoT. Daron currently works as a CTO in XOMNI Inc, a cloud company building PAAS offerings for retailers and XOGO where they are building a decision signage platform.</p>
              <h5><a href='https://twitter.com/daronyondem' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/daronyondem/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/daron.png'} alt={'Daron Yondem'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='mete'>
              <h4 className='top-marg'>Mete Atamel</h4>
              <h5 className='company'>Google</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Mete Atamel is a Developer Advocate at Google, focused on helping developers with Google Cloud. As a long-time Java and C# developer, he likes to compare the two ecosystems. Prior to Google, he worked at Microsoft, Skype, Adobe, EMC, and Nokia building apps and services on various web, mobile and cloud platforms. Originally from the island of Cyprus, he currently lives in Greenwich of London, not too far away from the prime meridian.</p>
              <h5><a href='https://twitter.com/meteatamel' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/meteatamel/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/mete.jpg'} alt={'Mete Atamel'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='eric'>
              <h4 className='top-marg'>Eric Johnson</h4>
              <h5 className='company'>AWS</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Eric Johnson is a Senior Developer Advocate for Serverless Applications at Amazon Web Services and is based in Northern Colorado. Eric is a fanatic about serverless and enjoys helping developers understand how serverless technologies introduces a major paradigm shift in how they approach building and running applications at massive scale with minimal administration overhead. Prior to this, Eric has worked as a developer, solutions architect and AWS Evangelist for an AWS partner company.</p>
              <h5><a href='https://twitter.com/edjgeek' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/singledigit/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/eric.jpg'} alt={'Eric Johnson'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='sarjeel'>
              <h4 className='top-marg'>Syed Sarjeel Yusuf</h4>
              <h5 className='company'>Atlassian</h5>
            </Col>
            <Col s={12} l={9}>
              <p>An aspiring stand-up comedian thrown into the field of serverless right after graduation, Sarjeel had been working on serverless monitoring for about a year. In 2019 he made the switch to Atlassian, but his passion still lies in serverless technology as is manifest in his articles exploring the realm of serverless from automatic monitoring to IoT in serverless and GraphQL processing Lambda functions. He is most intrigued by how serverless is reforming several domains of the software industry and is eager to see its growth.</p>
              <h5><a href='https://twitter.com/SarjeelY' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/syedsarj/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/sarjeel.jpeg'} alt={'Syed Sarjeel Yusuf'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='mehmet'>
              <h4 className='top-marg'>Mehmet Taşkıner</h4>
              <h5 className='company'>Getir</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Mehmet Taskiner is DevOps Engineer at Getir. Before Getir he worked for puhutv, helped to build its infrastructure ground up. He started his career developing mobile applications, backends for that mobile applications, after experiencing development side he decided to make developers life easier.</p>
              <h5><a href='https://twitter.com/taskinermehmet' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/mehmettaskiner/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/mehmet.jpg'} alt={'Mehmet Taşkıner'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='arto'>
              <h4 className='top-marg'>Arto Liukkonen</h4>
              <h5 className='company'>Nordcloud</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Arto Liukkonen is a Senior Developer at Nordcloud. Mainly JavaScript on both back- and front-end. Also willing to touch WordPress & PHP. Oh and serverless is also cool!</p>
              <h5><a href='https://twitter.com/artoliukkonen' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/artoliukkonen/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/arto.png'} alt={'Arto Liukkonen'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
          <Row>
            <Col s={12} l={12} id='mohamed'>
              <h4 className='top-marg'>Mohamed Labouardy</h4>
              <h5 className='company'>FoxIntelligence</h5>
            </Col>
            <Col s={12} l={9}>
              <p>Mohamed Labouardy is a software engineer/DevOps engineer and AWS Solution Architect. He is also a certified Scrum Master.
                 He is interested in serverless architecture, containers, distributed systems, Go, chaos engineering, and machine learning. He is a contributor to numerous open source projects such as DialogFlow, Jenkins, Docker, Nexus, and Telegraf. He has authored some open source projects related to DevOps as well.
                 He currently works at Foxintelligence as a lead DevOps engineer. He is also a technical content writer at several platforms and is a regular speaker at multiple international events and conferences, such as Nexus User Conference and AllDayDevOps.</p>
              <h5><a href='https://twitter.com/mlabouardy' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter light-blue-text text-darken-1"></i></a><a href='https://www.linkedin.com/in/mlabouardy/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in light-blue-text text-darken-3"></i></a></h5>
            </Col>
            <Col s={12} l={3}>
              <img src={'./media/speakers/mohamed.jpeg'} alt={'Mohamed Labouardy'} className='responsive-img circle' />
            </Col>
          </Row>
          <div className='divider' />
        </div>
      </div>
    );
  }
}

export default Speakers;
