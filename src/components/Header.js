import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div>
        <header className='header grad-bg'>
          <img src={'./media/serverless-days-logo-transparent2.png'} alt={'ServerlessDays İstanbul logo'} className='responsive-img' />
          <h3>Talk Serverless at the heart of İstanbul.</h3>
          <h4>Save The Date</h4>
          {/* <a href='https://www.eventbrite.com/e/serverlessdays-istanbul-tickets-???' target='_blank' rel='noopener noreferrer' className='btn-large top-marg'>Get Tickets!</a> */}
          <h5 className='top-marg'>October 03, 2019 - İstanbul, Turkey</h5>
        </header>
      </div>
    );
  }
}

export default Header;
