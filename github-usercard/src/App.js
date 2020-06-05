// import React, { Component } from 'react';
import React  from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';


   
class App extends React.Component {
  // constructor(props) {
    // super(props);
    state = {
        doggos: [],
        dogBreed: ''
  }

  componentDidMount() {
    console.log('componentDidMount running');
    axios
      .get("https://api.github.com/users/Hooliocoolio/followers")
      .then(res=> {
        console.log(res)
        this.setState({doggos: res.data.message})
      })
      .catch(err=> console.log(err));
  }
  handleChanges = e => {
    console.log(e.target.name, e.target.value);
    this.setState({ ...this.state, dogBreed: e.target.value });
  };

  fetchDoggos = e => {
    e.preventDefault();
    axios
      .get(`https://dog.ceo/api/breed/${this.state.dogBreed}/images`)
      .then(res => this.setState({ ...this.state, doggos: res.data.message }))
      .catch(err => console.log(err));
  };

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <input
          type="text"
          name="dogBreed"
          value={this.state.dogBreed}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchDoggos}>Fetch doggos</button>
        <div className="doggos">
          {this.state.doggos.map(doggo => (
            <img width="200" src={doggo} key={doggo} alt={doggo} />
          ))}
        </div>
      </div>
    );
  }
}


export default App;
