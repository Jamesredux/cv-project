import React, { Component } from 'react';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';
import uniqid from 'uniqid';

class ExperienceDisplay extends Component {
  constructor(props) {
    super(props);
    this.editRecord = this.editRecord.bind(this);
    this.showForm = this.showForm.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
  }

  showForm() {
    document.getElementById('experience-form').style.width = '400px';
    document.getElementById('experience-display').style.marginLeft = '400px';
  }

  editRecord(e) {
    this.props.requestEdit(e.target.dataset.id);
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
      <div className='display-item' key={item.id}>
        <div className='display-item-container'>
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
        <div className='buttons-div'>
          <div onClick={this.editRecord} data-id={item.id} className='edit-div'>
            <FaRegEdit pointerEvents='none' />
          </div>
          <div onClick={this.deleteRecord} data-id={item.id} className='delete'>
            <FaTrashAlt pointerEvents='none' />
          </div>
        </div>
      </div>
    ));
    return (
      <div className='display-box' id='experience-display'>
        <div className='content-div'>
          <h2>Experience</h2>
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
