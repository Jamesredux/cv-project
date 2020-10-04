import React, { Component } from 'react';
import SummaryForm from './SummaryForm';
import SummaryDisplay from './SummaryDisplay';

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Add Some Text here',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
  }

  handleSubmit(formData) {
    this.setState({
      text: formData.text,
    });
  }

  removeRecord(id) {
    const newArray = [...this.state.records];
    const filteredArray = newArray.filter((item) => item.id !== id);
    this.setState({ records: filteredArray });
  }

  //   rename educ-container
  render() {
    return (
      <div className='summary-container'>
        <SummaryForm submitForm={this.handleSubmit} />
        <SummaryDisplay data={this.state} removeRecord={this.removeRecord} />
      </div>
    );
  }
}

export default Summary;
