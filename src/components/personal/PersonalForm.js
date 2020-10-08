import React, { Component } from 'react';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      telephone: '',
      website: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.edit) {
      const { name, address, telephone, website, email } = this.props.data;
      this.setState({
        name: name,
        address: address,
        telephone: telephone,
        website: website,
        email: email,
      });
      this.props.editDone();
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({
      name: '',
      address: '',
      telephone: '',
      website: '',
      email: '',
    });
    this.hideForm();
  }

  hideForm() {
    document.getElementById('personal-form').style.width = '0';
    document.getElementById('personal-display').style.marginLeft = '0';
  }

  //Personal statement
  render() {
    return (
      <div className='pers-form form-box' id='personal-form'>
        <div className='title'>
          <h2>Personal Information</h2>
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
            <label>Location:</label>
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
            <label>Website:</label>
            <input
              type='text'
              name='website'
              value={this.state.website}
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
