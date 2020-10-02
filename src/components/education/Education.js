import React, { Component } from 'react';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      records: [
        {
          id: '33',
          institution: 'the school',
          from: '1987',
          until: '1992',
          qualifications: 'loads',
        },
        {
          id: '34',
          institution: 'the uni',
          from: '1993',
          until: '1997',
          qualifications: 'loads more',
        },
      ],
    };

    this.addRecord = this.addRecord.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
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

  removeRecord(id) {
    console.log(id);
    const newArray = [...this.state.records];
    const filteredArray = newArray.filter((item) => item.id !== id);
    this.setState({ records: filteredArray });
  }

  render() {
    return (
      <div className='educ-countainer'>
        <EducationForm submitForm={this.addRecord} />
        <EducationDisplay
          data={this.state.records}
          removeRecord={this.removeRecord}
        />
      </div>
    );
  }
}

export default Education;
