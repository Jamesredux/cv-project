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
      selectedJob: {},
      editActive: false,
    };

    this.addRecord = this.addRecord.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
    this.requestEdit = this.requestEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  addRecord(formData) {
    if (formData.duty !== '') {
      formData.duties.push(formData.duty);
      formData.duty = '';
    }
    const recordToEdit = this.state.records.find(
      (record) => record.id === formData.id
    );
    if (recordToEdit) {
      this.setState((prevState) => ({
        records: prevState.records.map((record) =>
          record.id === formData.id ? formData : record
        ),
        selectedJob: {},
      }));
    } else {
      this.setState((prevState) => {
        return {
          records: [...prevState.records, formData],
        };
      });
    }
  }

  removeRecord(id) {
    const newArray = [...this.state.records];
    const filteredArray = newArray.filter((item) => item.id !== id);
    this.setState({ records: filteredArray });
  }

  requestEdit(id) {
    const newJob = this.state.records.find((record) => record.id === id);

    this.setState({
      selectedJob: newJob,
      editActive: true,
    });
  }

  cancelEdit() {
    this.setState({ editActive: false });
  }

  render() {
    return (
      <div className='multi-container experience'>
        <ExperienceForm
          submitForm={this.addRecord}
          editData={this.state}
          editDone={this.cancelEdit}
        />
        <ExperienceDisplay
          data={this.state.records}
          removeRecord={this.removeRecord}
          requestEdit={this.requestEdit}
        />
      </div>
    );
  }
}

export default Experience;
