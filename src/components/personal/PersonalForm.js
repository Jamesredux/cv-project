import React, { Component } from 'react';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      telephone: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.hideForm();
  }

  hideForm() {
    document.getElementById('personal-form').style.width = '0';
    document.getElementById('personal-display').style.marginLeft = '0';
  }

  //Personal statement
  render() {
    return (
      <div className='pers-form' id='personal-form'>
        <div className='title'>
          <h3>Personal Information</h3>
          <div className='close-box' onClick={this.hideForm}>
            X
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='form-section'>
            <label>Name:</label>
            <input
              type='text'
              required
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-section'>
            <label>Address:</label>
            <input
              type='text'
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-section'>
            <label>Telephone:</label>
            <input
              type='tel'
              required
              name='telephone'
              value={this.state.telephone}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-section'>
            <label htmlFor=''>Email:</label>
            <input
              type='email'
              required
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-section'>
            <label htmlFor=''></label>
            <button type='submit'>submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PersonalForm;
