import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      posted: false,
      p_message: 'Please enter your email to be notified when the schedule and speakers are announced (we promise not to spam you).'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const signupData = {};
    formData.forEach(function(value, key){
      signupData[key] = value;
    });
    const json = JSON.stringify(signupData);
    // const signupData = {
    //   name_input: data.get('name_input'),
    //   email_input: data.get('email_input')
    // }
    // NOTE: you access FormData fields with `data.get(fieldName)` 
    const signupUrl = 'https://...';
    fetch(signupUrl, {
      method: 'POST',
      body: json,
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      let jsonResponse = response.json();
      console.log('A response!');
      console.log(jsonResponse);
    }).catch(e => {
      console.log('Something went wrong');
      console.log(e);
    }).then(response => console.log('Success:', response));

    // if success, update p_message
    this.setState({
      posted: true,
      p_message: "Thanks for signing up, we'll let you know as soon as our speaker lineup and schedule are live."
    });
  }

  render() {
    return (
      <div>
        <h4 className='center-align'>Tickets are now <a href='https://www.eventbrite.com/e/serverlessdays-istanbul-tickets-???' target='_blank' rel='noopener noreferrer'>on sale</a>!</h4>
        <div className='space-foot' />
        <p>{this.state.p_message}</p>
        {/* only show form if form hasn't been submitted */}
        {!this.state.posted &&
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Input id='name_input' name='name_input' s={12} label='Name' />
              <Input id='email_input' name='email_input' type='email' label='Email (required)' s={12} validate={true} required />
            </Row>
            <div className='center-align'>
              <button type='submit' className='waves-effect teal btn-large'>Sign up</button>
            </div>
          </form>
        }
        {/* only show after successful submit */}
        {this.state.posted &&
          <div className='center-align'>
            <button className='modal-close waves-effect teal btn-large'>Awesome</button>
          </div>
        }
      </div>
    );
  }
}

export default Signup;
