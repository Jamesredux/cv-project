import React, { Component } from 'react';
import uniqid from 'uniqid';

class SkillsForm extends Component {
  constructor() {
    super();
    this.state = {
      id: uniqid(),
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.editData.editActive) {
      const { id, text } = this.props.editData.selectedRecord;
      this.setState({
        id: id,
        text: text,
      });
      this.props.editDone();
    }
  }

  hideForm() {
    document.getElementById('skills-form').style.width = '0';
    document.getElementById('skills-display').style.marginLeft = '0';
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({
      id: uniqid(),
      text: '',
    });
  }

  render() {
    return (
      <div className=' form-box' id='skills-form'>
        <div className='title'>
          <h2>Skills</h2>
          <div className='close-box' onClick={this.hideForm}>
            X
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='form-section'>
            <label>Add Skill:</label>
            <input
              type='text'
              required
              name='text'
              value={this.state.text}
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

export default SkillsForm;
