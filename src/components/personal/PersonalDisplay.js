import React, { Component } from 'react';

class PersonalDisplay extends Component {
  constructor(props) {
    super(props);

    this.editInfo = this.editInfo.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  editInfo() {
    this.props.editData();
    this.showForm();
  }

  showForm() {
    document.getElementById('personal-form').style.width = '400px';
    document.getElementById('personal-display').style.marginLeft = '400px';
  }

  // add website and link to it
  render() {
    if (this.props.data.name) {
      const { name, address, telephone, website, email } = this.props.data;
      return (
        <div className='display-box' id='personal-display'>
          <div className='content-div'>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{telephone}</p>
            <a
              href={'https://' + website}
              target='_blank'
              rel='noreferrer noopener'
            >
              {website}
            </a>
            <p>{email}</p>
            <button className='edit-button' onClick={this.editInfo}>
              Edit
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='display-box' id='personal-display'>
          <div className='content-div'>
            <h2>James Doe</h2>
            <p>London, England</p>
            <p>0112 434 543</p>
            <a
              href='https://github.com/Jamesredux/'
              target='_blank'
              rel='noreferrer noopener'
            >
              github.com/Jamesredux
            </a>
            <p>jamesdoe@example.com</p>
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
