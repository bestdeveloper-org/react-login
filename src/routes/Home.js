import React, { Component } from 'react';

import TopBar from '../components/topBar/TopBar';
import HomeContent from '../components/homeContent/HomeContent';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <HomeContent/>
      </div>
    );
  }
}

