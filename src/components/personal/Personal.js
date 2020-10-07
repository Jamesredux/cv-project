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
      website: '',
      edit: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.editData = this.editData.bind(this);
  }

  editData() {
    this.setState({ edit: true });
  }

  cancelEdit() {
    this.setState({
      edit: false,
    });
  }

  handleSubmit(formData) {
    const { name, address, telephone, website, email } = formData;
    this.setState({
      name: name,
      address: address,
      telephone: telephone,
      website: website,
      email: email,
    });
  }

  render() {
    return (
      <div className='personal'>
        <PersonalForm
          submitForm={this.handleSubmit}
          data={this.state}
          editDone={this.cancelEdit}
        />
        <PersonalDisplay data={this.state} editData={this.editData} />
      </div>
    );
  }
}

export default Personal;
