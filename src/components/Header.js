import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div>
        <header className='header grad-bg'>
          <img src={'./media/serverless-days-logo-transparent2.png'} alt={'ServerlessDays İstanbul logo'} className='responsive-img' />
          <h3>Talk Serverless at the heart of İstanbul.</h3>
          <h4>Save The Date</h4>
          <iframe src= "https://biletino.com/ticketing/start/8131" style={{width: "100%", height: "400px"}}/>
          <h5 className='top-marg'>October 03, 2019 - İstanbul, Turkey</h5>
        </header>
      </div>
    );
  }
}

export default Header;
