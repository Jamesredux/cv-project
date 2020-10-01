import React, { Component } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import Personal from './components/personal/Personal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {},
      education: {},
    };
    this.displayPersonal = this.displayPersonal.bind(this);
    this.fillForm = this.fillForm.bind(this);
  }

  displayPersonal(personalInfo) {
    this.setState({ personal: personalInfo });
  }

  fillForm(oldData) {
    // method to repopulate form for editing - coming from display component
    console.log(oldData);
    // just need to put state from here back into the form
  }

  render() {
    return (
      <div className='cv-container'>
        <Personal />
        <p className='test'>another container</p>
      </div>
    );
  }
}

export default App;
