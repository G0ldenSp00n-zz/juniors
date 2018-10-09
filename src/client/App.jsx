import React, { Component } from 'react';
import FlavorComponent from './flavorComponent';
import FlavorCreator from './flavorCreator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {flavorList: [], newFlavor: ''};
    
    this.likeFlavor = this.likeFlavor.bind(this);
    this.newFlavor = this.newFlavor.bind(this);
    this.postFlavor = this.postFlavor.bind(this);
  }

  componentDidMount() {
    fetch('/flavors')
    .then(data => data.json())
    .then(data => {
      this.setState({...this.state, flavorList: data});
    })
    .catch(err => console.err(err));
  }

  likeFlavor(id) {
    return function (e) {
      let stateClone = this.state.flavorList.slice();
      stateClone.forEach(elm => {
        if(elm._id === id) {
          elm.likes ++;
          fetch('/likes', {
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: id})
          });
        }
      });
      this.setState({...this.state, flavorList: stateClone});
    }.bind(this);
  }

  newFlavor(e) {
      this.setState({...this.state, newFlavor: e.target.value});
  }

  postFlavor() {
    let flavor = this.state.newFlavor;
    fetch('/flavors', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({flavor: flavor}),
      
    }).then(data => data.json())
    .then(newFlavor => {
      let flavorListClone = this.state.flavorList.slice();
      flavorListClone.push(newFlavor)
      console.log(newFlavor)
      this.setState({...this.state, flavor: '', flavorList: flavorListClone});
    });
  }

  render() {
    let {flavorList} = this.state;
    let flavorComponents = flavorList.map((elm) => { 
      return (<FlavorComponent key={`flavor_${elm.flavor}_${elm._id}`} id={elm._id} likeFlavor={this.likeFlavor(elm._id)} flavor={elm.flavor} likes={elm.likes} />);
    })
    return (
      <div>
        <div>Flavors</div>
        <FlavorCreator newFlavor={this.newFlavor} postFlavor={this.postFlavor}/>
        {flavorComponents}
      </div>
    )
  }
}

export default App;