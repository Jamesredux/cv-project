import React, { Component } from 'react';
import SummaryForm from './SummaryForm';
import SummaryDisplay from './SummaryDisplay';

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Add Some Text here',
      edit: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.editInfo = this.editInfo.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  handleSubmit(formData) {
    this.setState({
      text: formData.text,
    });
  }

  editInfo(displayState) {
    this.setState({
      edit: true,
    });
  }

  cancelEdit() {
    this.setState({
      edit: false,
    });
  }

  render() {
    return (
      <div className='summary-container'>
        <SummaryForm
          submitForm={this.handleSubmit}
          data={this.state}
          editDone={this.cancelEdit}
        />
        <SummaryDisplay data={this.state} editInfo={this.editInfo} />
      </div>
    );
  }
}

export default Summary;
