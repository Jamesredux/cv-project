import React, { Component } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import Education from './components/education/Education';
import Personal from './components/personal/Personal';
import Experience from './components/experience/Experience';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {},
      education: {},
    };
  }

  render() {
    return (
      <div className='cv-container'>
        <Personal />

        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
