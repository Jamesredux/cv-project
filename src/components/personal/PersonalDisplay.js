import React, { Component } from 'react';

class PersonalDisplay extends Component {
  constructor(props) {
    super(props);

    this.editInfo = this.editInfo.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  editInfo() {
    // this.props.editData(this.props.data);
    this.showForm();
  }

  showForm() {
    document.getElementById('personal-form').style.width = '400px';
    document.getElementById('personal-display').style.marginLeft = '400px';
  }

  render() {
    if (this.props.data.name) {
      const { name, address, telephone, email } = this.props.data;
      return (
        <div className='pers-display' id='personal-display'>
          <div className='pers-div'>
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{telephone}</p>
            <p>{email}</p>
            <button className='edit-button' onClick={this.editInfo}>
              Edit
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='pers-display display-box' id='personal-display'>
          <div className='pers-div'>
            <h3>James McCann</h3>
            <p>12 Broad Road</p>
            <p>0112 434 543</p>
            <p>jamesmddded@gmail.com</p>
            <button className='edit-button' onClick={this.editInfo}>
              edit
            </button>
          </div>
        </div>
      );
    }
  }
}

export default PersonalDisplay;
