import React, { Component } from 'react';
import PersonalDisplay from './personal/PersonalDisplay';
import EducationDisplay from './education/EducationDisplay';

class Display extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='display-container'>
        <PersonalDisplay />
        <EducationDisplay />
      </div>
    );
  }
}

export default Display;
