import React from 'react';
import Signup from './Signup';

const Modal = () => {
  return (
    <div id='signupModal' className='modal'>
      <div className='modal-content'>
        <div className='center-align'>
          <img src={'./media/serverless-days-logo-transparent2.png'} alt={'ServerlessDays İstanbul logo'} className='responsive-img' />
          <div className='space-foot' />
        </div>
        <Signup />
      </div>
    </div>
  )
}

export default Modal;
