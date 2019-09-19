import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TopNav from './navigation/topNav';
import SideNav from './navigation/sideNav';
import SearchForm from './mainPage/searchForm/searchForm';
import AssetsData from './data/assetsData';

let assetData = AssetsData.assetsData;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      assetsData: {assetData},
      clientList: ['Amazon', 'Go Daddy', 'Microsoft', 'Xerox'],
      storeList: ['Go Daddy Store 1', 'Go Daddy Store 2'],
      assetType: ['Company Logo', 'Store Logo', 'Personal Logo', 'Style Guide', 'Marketing Material'],
      logoType: ['4 Color Process', 'Embroidery File','Laser Engraving File', 'Single Color', 'Spot Color'],
      isSideNavOpen: false,
      isFiltersOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  toggleMenu = () => {
    let previousState = {
      ...this.state
    };
    this.setState({isSideNavOpen: !previousState.isSideNavOpen});
  };

  toggleFilters =() => {
    let previousFiltersState = {
      ...this.state
    };
    this.setState({isFiltersOpen: !previousFiltersState.isFiltersOpen});
  };
  
  render() {
    return (
      <div>
        <TopNav onClickingMenu={this.toggleMenu}/>
        <SideNav isSideNavOpen={this.state.isSideNavOpen} onClickingMenu={this.toggleMenu}/>
        <Paper>
            <SearchForm 
              isFiltersOpen={this.state.isFiltersOpen}
              onClickingFilters={this.toggleFilters}
              clientList={this.state.clientList}
              storeList={this.state.storeList}
              assetType={this.state.assetType}
              logoType={this.state.logoType}/>
        </Paper>
      </div>
    );
  }
}

export default App;
