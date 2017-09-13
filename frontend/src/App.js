import React, { Component } from 'react';
import axios from "axios"
import {observer} from "mobx-react"
import './App.css';

const apiUrl = '/api/generate'
@observer class App extends Component {

  generate(){
    axios.get(apiUrl)
      .then((result)=>{
        if(result.status==200)
          this.props.store.name = result.data.name
      })
  }

  render() {
    return (
      <div className="App">
          <div className="gen-name">{this.props.store.name}</div>
          <div className="gen-action">
              <button className="button" onClick={this.generate.bind(this)}>Generate random name</button>
          </div>
      </div>
    );
  }
}

export default App;
