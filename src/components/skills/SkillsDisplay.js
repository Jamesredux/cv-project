import React, { Component } from 'react';
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';

class SkillsDisplay extends Component {
  constructor(props) {
    super(props);
    this.editInfo = this.editInfo.bind(this);
    this.showForm = this.showForm.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.editRecord = this.editRecord.bind(this);
  }

  showForm() {
    document.getElementById('skills-form').style.width = '400px';
    document.getElementById('skills-display').style.marginLeft = '400px';
  }
  editInfo() {}

  deleteRecord(e) {
    let confirmation = window.confirm(
      'Are you sure you want to delete this record?'
    );

    if (confirmation) {
      this.props.removeRecord(e.target.dataset.id);
    }
  }

  editRecord(e) {
    this.props.requestEdit(e.target.dataset.id);
    this.showForm();
  }

  render() {
    const listItems = this.props.data.map((item) => (
      <div className='skill-item' key={item.id}>
        <div className='skill-item-container'>
          <p>{item.text}</p>
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
      <div className='display-box' id='skills-display'>
        <div className='content-div'>
          <h2>Skills</h2>
          <div>{listItems}</div>
          <button id='add-skill' onClick={this.showForm}>
            Add Skill
          </button>
        </div>
      </div>
    );
  }
}

export default SkillsDisplay;
