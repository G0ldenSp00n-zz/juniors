import React, { Component } from 'react';
import FlavorComponent from './flavorComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetch('/flavors')
    .then(data => data.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div>Flavors</div>
      </div>
    )
  }
}

export default App;