import React, { Component } from 'react';
import Map from './Map';

class Location extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <div className='center-align'>
            <h2 className='center-align space'>Join us in İstanbul!</h2>
            <div className='titleHR' />
          </div>
        </div>
        <img src={'./media/istanbul.jpg'} alt={'İstanbul'} className='full-img' />
        <div className='container'>
          <div className='container'>
            <h2 className='center-align' id='venue'>Venue</h2>
            <p>ServerlessDays İstanbul will take place at <a href='http://khas.edu.tr/en/' target='_blank' rel='noopener noreferrer'>Kadir Has University</a> in İstanbul, Turkey.</p>
            <p>Kadir Has University at <br /> Cibali Mah. Hisaraltı Cad. No:17 <br /> Fatih, İstanbul / Turkey, 34083</p>
            <div className='small-space' />
          </div>
        </div>
        <img src={'./media/kadirhas.jpg'} alt={'Kadir Has University'} className='full-img' />
        <div className='small-space' />
        <h2 className='center-align' id='map'>Map</h2>
        <div className='map-div'>
          <Map />
        </div>
      </div>
    );
  }
}

export default Location;
