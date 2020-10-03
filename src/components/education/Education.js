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
          institution: 'Example University',
          from: '2002',
          until: '2006',
          qualifications: 'BA(Hons) Maths and French',
        },
        {
          id: '34',
          institution: 'Example School',
          from: '1995',
          until: '2002',
          qualifications: 'A Levels: English (A) Maths (B) Economics (B)',
        },
      ],
    };

    this.addRecord = this.addRecord.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
  }

  addRecord(formData) {
    this.setState((prevState) => {
      return {
        records: [...prevState.records, formData],
      };
    });
  }

  removeRecord(id) {
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
