import React, { Component } from 'react';
import PersonalForm from './personal/PersonalForm';
import EducationForm from './education/EducationForm';

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='form-container'>
        <PersonalForm />
        <EducationForm />
      </div>
    );
  }
}

export default Form;
