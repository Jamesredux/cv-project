import React, { Component } from 'react';

class EducationDisplay extends Component {
  constructor(props) {
    super(props);
    this.editInfo = this.editInfo.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    document.getElementById('education-form').style.width = '400px';
    document.getElementById('education-display').style.marginLeft = '400px';
  }
  editInfo() {
    this.showForm();
  }

  render() {
    const listItems = this.props.data.map((item) => (
      <div className='edu-item' key={item.id}>
        <h4>{item.institution}</h4>
        <p>
          From: {item.from} Until:{item.until}
        </p>
        <p>Qualifications:</p>
        <p>{item.qualifications}</p>
        <div className='delete'>Remove</div>
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
