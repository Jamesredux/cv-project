import React, { Component } from 'react';
import SkillsForm from './SkillsForm';
import SkillsDisplay from './SkillsDisplay';

class Skills extends Component {
  constructor() {
    super();
    this.selectedRecord = {};
    this.state = {
      records: [
        {
          id: '334',
          text: 'Add as many skills or interests as you like',
        },
        {
          id: '344',
          text: 'Fluent German and French',
        },
        {
          id: '345',
          text:
            'Tech used: HTML5; CSS3; JavaScript; SQL; Linux; Mac; iOS; React; Rails; Ruby;',
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
        <SkillsForm
          submitForm={this.addRecord}
          editData={this.state}
          editDone={this.cancelEdit}
        />
        <SkillsDisplay
          data={this.state.records}
          removeRecord={this.removeRecord}
          requestEdit={this.requestEdit}
        />
      </div>
    );
  }
}

export default Skills;
