import React, { Component } from 'react';
import Personal from './components/personal/Personal';
import Summary from './components/summary/Summary';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';

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
        <Summary />
        <Education />
        <Experience />
        <Skills />
      </div>
    );
  }
}

export default App;
