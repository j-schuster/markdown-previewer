import React, { Component } from 'react';
import './App.css';
const ReactMarkdown = require('react-markdown');


class Markdown extends Component {
constructor(props){
super(props);
this.state = {
    formInput: `Hello, World!\n===\n---\n# This is an h1\n## This is an h2\n### This is an h3\n#### This is an h4\n##### This is an h5\n###### `, 
  } 
  this.handleChange = this.handleChange.bind(this);
}


handleChange(event){
  this.setState({formInput: event.target.value});
}

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 board">
            <div className="row">
             <div className="col-md-6 left-side">
               <textarea className="input-text" type="text" value={this.state.formInput} onChange={this.handleChange} />
             </div>
             <div className="col-md-6 right-side">
               <div className="result-text"><ReactMarkdown source={this.state.formInput} /></div>
             </div>
            </div>
          </div>  
        </div>
     </div>
    );
  }
}

class App extends Component{
  render(){
    return (
       < Markdown />
    );
  }
}

export default App;
