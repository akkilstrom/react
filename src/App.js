import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MiddleContent from './components/MiddleContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className='main-container'>
          <SidebarLeft />
          <MiddleContent />
          <SidebarRight />
        </main>
      </div>
    );
  }
}

export default App;
