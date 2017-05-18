import React, { Component } from 'react';
import Row from './Row';
import SimpleModal from './SimpleModal';
import logo from './assets/logo.svg';
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      selected: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => {
        return a.name > b.name;
      });
      let newUsers = data.map((item) => {
        item.selected = false;
        return item;
      });
      this.setState({users: newUsers});
    });
  }

  _toggleItem(index, e) {
    var usersClone = [...this.state.users];
    usersClone[index].selected = e.currentTarget.checked;
    this.setState({users: usersClone});
  }

  _showConfirmed() {
    let filtered = this.state.users.filter((item) => {
      return item.selected;
    });
    this.setState({selected: filtered});
  }

  _hideConfirmed(e){
    e.preventDefault();
    this.setState({selected: []});
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ksquare</h2>
        </div>
        <ul className="App-boxes">
          { 
            this.state.users.map((item, index)=>{
              return <Row key={index} 
              onChange={this._toggleItem.bind(this, index)} 
              checked={item.selected} 
              name={item.name} 
              email={item.email} />
            })
          }
        </ul>
        <button onClick={this._showConfirmed.bind(this)}>Confirm</button>
        <SimpleModal onClose={this._hideConfirmed.bind(this)} list={this.state.selected} />
      </div>
    );
  }
}

export default App;
