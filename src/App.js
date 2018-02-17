import React, { Component } from 'react';
import { Sidebar } from "./containers/Sidebar"
import  { MessagesList }  from "./containers/MessagesList"
import  { AddMessage }  from "./containers/AddMessage"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar/>
        <section className="main">
           <MessagesList/>
           <AddMessage/>
        </section>
      </div>
    )
  }
}

export default App