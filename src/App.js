import React, { Component } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import Education from './components/education/Education';
import Personal from './components/personal/Personal';

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
      </div>
    );
  }
}

export default App;
