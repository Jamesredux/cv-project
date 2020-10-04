import React, { Component } from 'react';
import uniqid from 'uniqid';
import { CgAddR } from 'react-icons/cg';

class ExperienceForm extends Component {
  constructor() {
    super();
    this.state = {
      id: uniqid(),
      employer: '',
      from: '',
      until: '',
      duty: '',
      duties: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.addDuty = this.addDuty.bind(this);
  }

  hideForm() {
    document.getElementById('experience-form').style.width = '0';
    document.getElementById('experience-display').style.marginLeft = '0';
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addDuty(e) {
    if (this.state.duty === '') return;
    // const newDuty = this.state.duty;
    this.setState((prevState) => {
      return {
        duties: [...prevState.duties, this.state.duty],
      };
    });
    this.setState({ duty: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({
      id: uniqid(),
      employer: '',
      from: '',
      until: '',
      duties: '',
      duty: '',
    });
  }

  // add note on experience form to add multiple duties

  render() {
    return (
      <div className=' form-box' id='experience-form'>
        <div className='title'>
          <h3>Experience</h3>
          <div className='close-box' onClick={this.hideForm}>
            X
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='form-section'>
            <label>Employer:</label>
            <input
              type='text'
              required
              name='employer'
              value={this.state.employer}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-section '>
            <label>Dates Employed</label>
          </div>
          <div className='form-section'>
            <label>From:</label>
            <input
              type='text'
              name='from'
              value={this.state.from}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-section'>
            <label>Until:</label>
            <input
              type='text'
              name='until'
              value={this.state.until}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-section'>
            <label>Responsibilites and Achievments:</label>
            <input
              type='text'
              name='duty'
              value={this.state.duty}
              onChange={this.handleChange}
            />
            <div className='add-record' onClick={this.addDuty}>
              <CgAddR pointerEvents='none' />
            </div>
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

export default ExperienceForm;
