import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';
import ExperienceDisplay from './ExperienceDisplay';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      records: [
        {
          id: '35',
          employer: 'Good Job Place',
          from: '2002',
          until: '2006',
          duties: ['This was the work I did', 'did some more'],
        },
        {
          id: '36',
          employer: 'Exactoplace PLC',
          from: '1995',
          until: '2002',
          duties: ['Manager', 'Some other stuff'],
        },
      ],
    };

    this.addRecord = this.addRecord.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
  }

  addRecord(formData) {
    if (formData.duty !== '') {
      formData.duties.push(formData.duty);
      formData.duty = '';
    }

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

  //   rename educ-container
  render() {
    return (
      <div className='multi-container'>
        <ExperienceForm submitForm={this.addRecord} />
        <ExperienceDisplay
          data={this.state.records}
          removeRecord={this.removeRecord}
        />
      </div>
    );
  }
}

export default Experience;
