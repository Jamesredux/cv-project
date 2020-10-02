import React, { Component } from 'react';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      records: [],
    };

    this.addRecord = this.addRecord.bind(this);
  }

  //   create object that are the education history
  // before display sort by date have option to delete
  //  have option to add more

  addRecord(formData) {
    this.setState((prevState) => {
      return {
        records: [...prevState.records, formData],
      };
    });
    //   formData will be object, add to state array
  }

  render() {
    return (
      <div className='educ-countainer'>
        <EducationForm submitForm={this.addRecord} />
        <EducationDisplay data={this.state.records} />
      </div>
    );
  }
}

export default Education;
