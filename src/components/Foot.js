import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Scrollchor from 'react-scrollchor';
import { Footer } from 'react-materialize';

function Foot () {
  return (
    <footer>
      <Footer copyrights={
        <div>
          © 2019 Serverless Days İstanbul &nbsp;
          <a href="https://twitter.com/serverlesstr" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter light-blue-text text-darken-1"></i></a>
        </div>
      }
        links={
          <div>
            <div className='space-foot hide-on-med-and-down' />
            <ul className='left-align'>
              {/* <li><a href='https://www.eventbrite.com/e/serverlessdays-istanbul-tickets-???' target='_blank' rel='noopener noreferrer'>Tickets</a></li> */}
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3 highlighted-text' to='/about'>About</Link></Scrollchor></li>
              <li><Link className='grey-text text-lighten-3 highlighted-text' to='/location#venue'>Venue</Link></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3 highlighted-text' to='/speakers'>Speakers</Link></Scrollchor></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#top'><Link className='grey-text text-lighten-3 highlighted-text' to='/schedule'>Schedule</Link></Scrollchor></li>
              <li><Link className='grey-text text-lighten-3 highlighted-text' to='/about#coc'>Code of Conduct</Link></li>
              <li><a href="https://twitter.com/serverlesstr" target="_blank" rel="noopener noreferrer" className='grey-text text-lighten-3 highlighted-text'>Twitter</a></li>
              <li><Scrollchor animate={{offset: -100, duration: 500}} to='#veryTop' className='grey-text text-lighten-3 highlighted-text'>Back to top</Scrollchor></li>
            </ul>
          </div>
        }
        className='copyrights'
      >
        <div className='space-foot hide-on-med-and-down' />
        <div className='small-space hide-on-med-and-up' />
        <h5 className='white-text left-align normal'>ServerlessDays İstanbul</h5>
        <p className='grey-text text-lighten-4 left-align'>October 03, 2019 <br /> Kadir Has University at <br /> Cibali Mah. Hisaraltı Cad. No:17 <br /> Fatih, İstanbul / Turkey, 34083</p>
        <p className='grey-text text-lighten-4 left-align'>ServerlessDays İstanbul is presented by <a href='https://www.thundra.io/' target='_blank' rel='noopener noreferrer' className='grey-text text-lighten-4 highlighted-text'>Thundra</a>.</p>
      </Footer>
    </footer>
  );
}

export default Foot;
