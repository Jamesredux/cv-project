import React, { Component } from 'react';
import PersonalDisplay from './PersonalDisplay';
import PersonalForm from './PersonalForm';

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      telephone: '',
      email: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    const { name, address, telephone, email } = formData;
    this.setState({
      name: name,
      address: address,
      telephone: telephone,
      email: email,
    });
  }

  render() {
    return (
      <div className='personal'>
        <PersonalForm submitForm={this.handleSubmit} />
        <PersonalDisplay data={this.state} editData={this.editData} />
      </div>
    );
  }
}

export default Personal;
