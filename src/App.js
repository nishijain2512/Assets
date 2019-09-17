import React, { Component } from 'react';
import TopNav from './navigation/topNav';
import SideNav from './navigation/sideNav';

class App extends Component {
  state = {
    isSideNavOpen: false
  }
  render() {
    return (
      <div>
        <TopNav isSideNavOpen={this.state.isSideNavOpen}/>
        <SideNav />
      </div>
    );
  }
}

export default App;
