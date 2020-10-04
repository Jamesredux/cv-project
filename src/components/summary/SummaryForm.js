import React, { Component } from 'react';

class SummaryForm extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  hideForm() {
    document.getElementById('summary-form').style.width = '0';
    document.getElementById('summary-display').style.marginLeft = '0';
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.edit) {
      this.setState({
        text: this.props.data.text,
      });
      this.props.editDone();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({
      text: '',
    });
    this.hideForm();
  }

  render() {
    return (
      <div className=' form-box' id='summary-form'>
        <div className='title'>
          <h3>Summary</h3>
          <div className='close-box' onClick={this.hideForm}>
            X
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='form-section'>
            <label>Summary:</label>
            <textarea
              name='text'
              cols='30'
              rows='4'
              maxLength='5000'
              value={this.state.text}
              onChange={this.handleChange}
            ></textarea>
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

export default SummaryForm;
