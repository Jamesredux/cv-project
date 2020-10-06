import React, { Component } from 'react';
import uniqid from 'uniqid';
import { CgAddR } from 'react-icons/cg';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';

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
    this.deleteDuty = this.deleteDuty.bind(this);
    this.editDuty = this.editDuty.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.editData.editActive) {
      const {
        id,
        employer,
        from,
        until,
        duties,
      } = this.props.editData.selectedJob;
      this.setState({
        id: id,
        employer: employer,
        from: from,
        until: until,
        duties: duties,
      });
      this.props.editDone();
    }
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

  deleteDuty(e) {
    const removeIndex = parseInt(e.target.dataset.id);
    this.removeRecord(removeIndex);
  }

  editDuty(e) {
    const selectId = parseInt(e.target.dataset.id);
    const selectedDuty = this.state.duties.filter(
      (duty, index) => index === selectId
    );
    this.setState({ duty: selectedDuty });
    this.removeRecord(selectId);
  }

  removeRecord(removeIndex) {
    this.setState((prevState) => ({
      duties: prevState.duties.filter((duty, index) => index !== removeIndex),
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({
      id: uniqid(),
      employer: '',
      from: '',
      until: '',
      duty: '',
      duties: [],
    });
  }

  render() {
    const dutyList = this.state.duties.map((duty, index) => (
      <div className='duty-item' key={uniqid()}>
        <li>{duty}</li>
        <div className='buttons-div'>
          <div onClick={this.editDuty} data-id={index} className='edit-div'>
            <FaRegEdit pointerEvents='none' />
          </div>
          <div onClick={this.deleteDuty} data-id={index} className='delete'>
            <FaTrashAlt pointerEvents='none' />
          </div>
        </div>
      </div>
    ));
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
            <h2>Responsibilites and Achievments</h2>
          </div>
          <div className='form-section'>
            <label>Add to create list:</label>
            <input
              type='text'
              name='duty'
              maxLength='500'
              value={this.state.duty}
              onChange={this.handleChange}
            />
            <div className='add-record' onClick={this.addDuty}>
              <CgAddR pointerEvents='none' />
            </div>
          </div>
          <div className='form-section'>
            <ul className='job-details-list'>{dutyList}</ul>
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
