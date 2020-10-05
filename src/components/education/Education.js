import React, { Component } from 'react';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';

class Education extends Component {
  constructor() {
    super();
    this.selectedRecord = {};
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
      selectedRecord: {},
      editActive: false,
    };

    this.addRecord = this.addRecord.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
    this.requestEdit = this.requestEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  addRecord(formData) {
    const recordToEdit = this.state.records.find(
      (record) => record.id === formData.id
    );

    if (recordToEdit) {
      this.setState((prevState) => ({
        records: prevState.records.map((record) =>
          record.id === formData.id ? formData : record
        ),
        selectedRecord: {},
      }));
    } else {
      this.setState((prevState) => {
        return {
          records: [...prevState.records, formData],
        };
      });
    }
  }

  requestEdit(id) {
    const newRecord = this.state.records.find((record) => record.id === id);

    this.setState({
      selectedRecord: newRecord,
      editActive: true,
    });
  }

  removeRecord(id) {
    const newArray = [...this.state.records];
    const filteredArray = newArray.filter((item) => item.id !== id);
    this.setState({ records: filteredArray });
  }

  cancelEdit() {
    this.setState({ editActive: false });
  }

  render() {
    return (
      <div className='multi-container'>
        <EducationForm
          submitForm={this.addRecord}
          editData={this.state}
          editDone={this.cancelEdit}
        />
        <EducationDisplay
          data={this.state.records}
          removeRecord={this.removeRecord}
          requestEdit={this.requestEdit}
        />
      </div>
    );
  }
}

export default Education;
