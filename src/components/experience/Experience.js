import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';
import ExperienceDisplay from './ExperienceDisplay';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      records: [
        {
          id: '12',
          employer: 'Employer',
          from: 'from',
          until: 'until',
          duties: [
            'write you work history here',
            'Add experience gained',
            'Achievements',
            'Add as many of these bullet points as you want!',
            'Delete these example records with the trash symbol on the right',
          ],
        },
        {
          id: '35',
          employer: 'Exampo Plc',
          from: '2015',
          until: 'Present',
          duties: [
            'Develop web apps with React, JS, HTML',
            'Lead Quality Team',
            'Increased web traffic by 354%',
            'Planned and executed complete overhaul of code base',
          ],
        },
        {
          id: '36',
          employer: 'F-rinstance Web',
          from: '2010',
          until: '2015',
          duties: [
            'Created Web Apps to user specifications',
            'Designed perfomance enhancement software for company',
            'Fixed bugs in exsisting web apps',
          ],
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
