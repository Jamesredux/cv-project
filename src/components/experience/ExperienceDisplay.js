import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import uniqid from 'uniqid';

class ExperienceDisplay extends Component {
  constructor(props) {
    super(props);
    this.editInfo = this.editInfo.bind(this);
    this.showForm = this.showForm.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
  }

  showForm() {
    document.getElementById('experience-form').style.width = '400px';
    document.getElementById('experience-display').style.marginLeft = '400px';
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
            <h4 className='large-text'>{item.employer}</h4>
            <p>
              {item.from}
              {' - '}
              {item.until}
            </p>
          </div>
          {item.duties && (
            <ul>
              {item.duties.map((duty) => (
                <li key={uniqid()}>{duty}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div onClick={this.deleteRecord} data-id={item.id} className='delete'>
            <FaTrashAlt pointerEvents='none' />
          </div>
        </div>
      </div>
    ));
    return (
      <div className='display-box' id='experience-display'>
        <div className='edu-div'>
          <h3>Experience</h3>
          <div>{listItems}</div>
          <button id='add-experience' onClick={this.showForm}>
            Add Experience
          </button>
        </div>
      </div>
    );
  }
}

export default ExperienceDisplay;
