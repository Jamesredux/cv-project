import React, { Component } from 'react';

class SummaryDisplay extends Component {
  constructor(props) {
    super(props);
    this.editInfo = this.editInfo.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    document.getElementById('summary-form').style.width = '400px';
    document.getElementById('summary-display').style.marginLeft = '400px';
  }
  editInfo() {
    this.showForm();
  }

  render() {
    return (
      <div className='display-box' id='summary-display'>
        <div className='content-div'>
          <h3>Summary</h3>
          <p>{this.props.data.text}</p>
          <button className='edit-button' onClick={this.editInfo}>
            edit
          </button>
        </div>
      </div>
    );
  }
}

export default SummaryDisplay;
