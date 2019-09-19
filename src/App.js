import React, { Component } from 'react';
import TopNav from './navigation/topNav';
import SideNav from './navigation/sideNav';
import SearchForm from './mainPage/searchForm/searchForm';
import SortBy from './mainPage/sortBy';
import AssetsData from './data/assetsData';
import Box from '@material-ui/core/Box';

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
      sortOptions:['Asset ID', 'Asset Name', 'Created By', 'Create Date', 'Client'],
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
        <Box>
            <SearchForm 
              isFiltersOpen={this.state.isFiltersOpen}
              onClickingFilters={this.toggleFilters}
              clientList={this.state.clientList}
              storeList={this.state.storeList}
              assetType={this.state.assetType}
              logoType={this.state.logoType}/>
            <SortBy sortOptions={this.state.sortOptions}/>
        </Box>
        
      </div>
    );
  }
}

export default App;
