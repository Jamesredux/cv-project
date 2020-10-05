import React, { Component } from 'react';
import uniqid from 'uniqid';

class EducationForm extends Component {
  constructor() {
    super();
    this.state = {
      id: uniqid(),
      institution: '',
      from: '',
      until: '',
      qualifications: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.editData.editActive) {
      const {
        id,
        institution,
        from,
        until,
        qualifications,
      } = this.props.editData.selectedRecord;
      this.setState({
        id: id,
        institution: institution,
        from: from,
        until: until,
        qualifications: qualifications,
      });
      this.props.editDone();
    }
  }

  hideForm() {
    document.getElementById('education-form').style.width = '0';
    document.getElementById('education-display').style.marginLeft = '0';
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({
      id: uniqid(),
      institution: '',
      from: '',
      until: '',
      qualifications: '',
    });
  }

  populateEditForm() {}

  render() {
    return (
      <div className='edu-form form-box' id='education-form'>
        <div className='title'>
          <h3>Education</h3>
          <div className='close-box' onClick={this.hideForm}>
            X
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='form-section'>
            <label>Institution Attended:</label>
            <input
              type='text'
              required
              name='institution'
              value={this.state.institution}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-section '>
            <label>Dates Attended</label>
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
            <label>Qualification Received:</label>
            <input
              type='text'
              name='qualifications'
              value={this.state.qualifications}
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

export default EducationForm;
