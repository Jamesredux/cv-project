import React, { Component } from 'react';
import PersonalDisplay from './personal/PersonalDisplay';
import EducationDisplay from './education/EducationDisplay';

class Display extends Component {
  constructor(props) {
    super(props);

    this.editData = this.editData.bind(this);
  }

  editData(oldData) {
    this.props.fillForm(oldData);
  }

  render() {
    return (
      <div className='display-container'>
        <PersonalDisplay data={this.props.personal} editData={this.editData} />
        <EducationDisplay />
      </div>
    );
  }
}

export default Display;
