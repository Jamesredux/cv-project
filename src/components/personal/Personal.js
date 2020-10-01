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
      editSent: false,
    });
  }

  // editData(oldData) {
  //   const { name, address, telephone, email } = oldData;
  //   this.setState({
  //     name: name,
  //     address: address,
  //     telephone: telephone,
  //     email: email,
  //     editSent: true,
  //   });
  // }

  //Personal statement
  render() {
    return (
      <div className='personal'>
        <PersonalForm
          submitForm={this.handleSubmit}
          data={this.state}
          useProps={this.state.editSent}
        />
        <PersonalDisplay data={this.state} editData={this.editData} />
      </div>
    );
  }
}

export default Personal;
