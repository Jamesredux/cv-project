import React, { Component } from 'react';
import PersonalForm from './personal/PersonalForm';
import EducationForm from './education/EducationForm';
import Header from './Header.js';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handlePersonal = this.handlePersonal.bind(this);
  }

  handlePersonal(personalObject) {
    this.props.displayPersonal(personalObject);
  }

  render() {
    return (
      <div className='form-container'>
        <Header />
        <PersonalForm handlePersonal={this.handlePersonal} />
        <EducationForm />
      </div>
    );
  }
}

export default Form;
