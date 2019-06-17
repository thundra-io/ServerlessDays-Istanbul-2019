import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Schedule extends Component {
  render () {
    return (
      <div className='container schedule' id='top'>
        <div className='center-align'>
          <h2><span className='hide-on-small-only'>Serverlessdays İstanbul </span>Schedule</h2>
          <div className='titleHR' />
        </div>
        <div className='center-align'>
          <p>Will be announced until 1st of September ...</p>
        </div>
        <div className='divider' />
      </div>
    );
  }
}

export default Schedule;
