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
          <div className='container'>
            <table className="striped text-medium">
              <thead>
                <tr>
                  <th width="250">Time</th>
                  <th width="750">Event</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>08:30 - 09:00</td>
                <td>Reception and Breakfast</td>
              </tr>
              <tr>
                <td>09:00 - 09:15</td>
                <td>Opening Remarks</td>
              </tr>
              <tr>
                <td>09:15 - 10:00</td>
                <td>Danilo Poccia, Diving deep into the event-driven side of Serverless</td>
              </tr>
              <tr>
                <td>10:00 - 10:30</td>
                <td>Mete Atamel, Serverless Containers with Knative and Cloud Run</td>
              </tr>
              <tr>
                <td>10:30 - 10:45</td>
                <td>Coffee break</td>
              </tr>
              <tr>
                <td>10:45 - 11:15</td>
                <td>Mohamed Labouardy, Lessons Learned while going serverless in production</td>
              </tr>
              <tr>
                <td>11:15 - 11:45</td>
                <td>Syed Sarjeel Yusuf, Better IoT with Serverless GraphQL</td>
              </tr>
              <tr>
                <td>11:45 - 12:15</td>
                <td>Kas Perch, Breaking out of the Serverless Container with V8</td>
              </tr>
              <tr>
                <td>12:15 - 13:30</td>
                <td>Lunch break</td>
              </tr>
              <tr>
                <td>13:30 - 14:00</td>
                <td>Daron Yondem, What comes after your first function in serverless?</td>
              </tr>
              <tr>
                <td>14:00 - 14:30</td>
                <td>Eric Johnson, Thinking Asynchronously</td>
              </tr>
              <tr>
                <td>14:30 - 14:45</td>
                <td>Coffee break</td>
              </tr>
              <tr>
                <td>14:45 - 15:15</td>
                <td>Mehmet Taşkıner, Collect and analyze data: The Cheaper Way</td>
              </tr>
              <tr>
                <td>15:15 - 15:45</td>
                <td>Arto Liukkonen, Serverless Superpowers for Frontend Developers</td>
              </tr>
              <tr>
                <td>15:45 - 16:00</td>
                <td>Coffee Break</td>
              </tr>
              <tr>
                <td>16:00 - 16:45</td>
                <td>Slobodan Stojanovic, Modern Art of Serverless Architecture</td>
              </tr>
              <tr>
                <td>16:45 - 17:00</td>
                <td>Closing Remarks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='divider' />
      </div>
    );
  }
}

export default Schedule;
