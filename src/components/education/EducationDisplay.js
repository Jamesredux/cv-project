import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

class EducationDisplay extends Component {
  constructor(props) {
    super(props);
    this.editInfo = this.editInfo.bind(this);
    this.showForm = this.showForm.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
  }

  showForm() {
    document.getElementById('education-form').style.width = '400px';
    document.getElementById('education-display').style.marginLeft = '400px';
  }
  editInfo() {
    this.showForm();
  }

  deleteRecord(e) {
    let confirmation = window.confirm(
      'Are you sure you want to delete this record?'
    );

    if (confirmation) {
      this.props.removeRecord(e.target.dataset.id);
    }
  }

  render() {
    const listItems = this.props.data.map((item) => (
      <div className='edu-item' key={item.id}>
        <div className='content'>
          <div className='title'>
            <h4 className='large-text'>{item.institution}</h4>
            <p>
              <span className='bold-text'>Dates Attended:</span> {item.from}
              {' - '}
              {item.until}
            </p>
          </div>
          <p>{item.qualifications}</p>
        </div>
        <div>
          <div onClick={this.deleteRecord} data-id={item.id} className='delete'>
            <FaTrashAlt pointer-events='none' />
          </div>
        </div>
      </div>
    ));
    return (
      <div className='edu-display' id='education-display'>
        <div className='edu-div'>
          <h3>Education</h3>
          <div>{listItems}</div>
          <button id='add-education' onClick={this.showForm}>
            Add Education
          </button>
        </div>
      </div>
    );
  }
}

export default EducationDisplay;
