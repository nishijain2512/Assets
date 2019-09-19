import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        backgroundColor: '#FFFFFF',
        margin: theme.spacing(1),
    },
    filterTextField: {
        backgroundColor: '#FFFFFF',
        margin: theme.spacing(2),
    },
    leftIcon: {
        marginLeft: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#2979ff',
        justifyContent: 'right',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
  }));

const SearchForm = (props) => {

    const classes = useStyles();

    const [clientValues, setClientValues] = React.useState('Client');
    const [storeList, setstoreList] = React.useState('All');
    const [assetType, setassetType] = React.useState('All');
    const [logoType, setlogoType] = React.useState('All');

    function clientChangeHandler(event) {
        console.log(event.target.value);
        setClientValues(event.target.value);
    }    
    function storeChangeHandler(event) {
        console.log(event.target.value);
        setstoreList(event.target.value);
    } 
    function assetTypeChangeHandler(event) {
        console.log(event.target.value);
        setassetType(event.target.value);
    } 
    function logoTypeChangeHandler(event) {
        console.log(event.target.value);
        setlogoType(event.target.value);
    } 
    let clientMenuItem = props.clientList.map(element => {
        return (
            <MenuItem key={element} value={element}>{element}</MenuItem>
        );
    });

    let storeMenuItem = props.storeList.map(element => {
        return (
            <MenuItem key={element} value={element}>{element}</MenuItem>
        );
    });

    let assetTypeMenuItem = props.assetType.map(element => {
        return (
            <MenuItem key={element} value={element}>{element}</MenuItem>
        );
    });

    let logoTypeMenuItem = props.logoType.map(element => {
        return (
            <MenuItem key={element} value={element}>{element}</MenuItem>
        );
    });

    let defaultSearchForm = (
        <Box display="flex" bgcolor="#cccccc" alignItems="center">
            <Box display="flex" flexGrow={1} alignItems="center">
                <Box>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                            value={clientValues}
                            onChange={clientChangeHandler}
                            displayEmpty
                            >
                            <MenuItem value="Client">
                                <em>Client</em>
                            </MenuItem> 
                            {clientMenuItem}   
                        </Select>
                    </FormControl>
                    <TextField
                        id="asset-id"
                        className={classes.textField}
                        defaultValue="Asset ID"
                        margin="normal"
                        variant="outlined"
                        //inputProps={{ 'aria-label': 'bare' }}
                    />
                    <TextField
                        id="keyword"
                        className={classes.textField}
                        placeholder="Keyword"
                        margin="normal"
                        variant="outlined"
                        //inputProps={{ 'aria-label': 'bare' }}
                    />
                </Box>
                <Box>
                    <FormControlLabel control={<Checkbox color="primary" />} label="Include Archive" />
                </Box>
            </Box>
            <Box>
                <Button variant="contained" className={classes.button}>
                    <SearchIcon className={classes.leftIcon} />
                    Search
                </Button>
                <Button variant="contained" color="default" className={classes.button} onClick={props.onClickingFilters}>
                    <TuneIcon className={classes.leftIcon} />
                    Filters
                </Button>
            </Box>
        </Box>
    );

    const filters = (
        <Box bgcolor="#cccccc" display="flex">
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel shrink htmlFor="age-customized-select">Store</InputLabel>
                <Select
                    value={storeList}
                    onChange={storeChangeHandler}
                    displayEmpty
                    className={classes.selectEmpty}>
                    <MenuItem value="All">
                        <em>All</em>
                    </MenuItem>
                    {storeMenuItem}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel shrink htmlFor="age-customized-select">Asset Type</InputLabel>
                <Select
                    value={assetType}
                    onChange={assetTypeChangeHandler}
                    displayEmpty
                    className={classes.selectEmpty}>
                    <MenuItem value="All">
                        <em>All</em>
                    </MenuItem> 
                    {assetTypeMenuItem}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel shrink htmlFor="age-customized-select">Logo Type</InputLabel>
                <Select
                    value={logoType}
                    onChange={logoTypeChangeHandler}
                    displayEmpty
                    className={classes.selectEmpty}>
                    <MenuItem value="All">
                        <em>All</em>
                    </MenuItem> 
                    {logoTypeMenuItem}
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel shrink htmlFor="age-customized-Textfield">Logo Type</InputLabel>
                <TextField
                    id="specific color"
                    className={classes.filterTextField}
                    placeholder="Start typing...."
                    margin="normal"
                    variant="outlined"
                    
                />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel shrink htmlFor="bootstrap-input">Created by</InputLabel>
                <TextField
                    id="specific color"
                    className={classes.filterTextField}
                    placeholder="Start typing...."
                    margin="normal"
                    variant="outlined"
                    
                />
            </FormControl>
        </Box>
    );

    let displaySearchForm = (
        <Box>
            {defaultSearchForm}
        </Box>
    )
    if (props.isFiltersOpen){
        displaySearchForm = (
            <Box>
            {defaultSearchForm}
            {filters}
        </Box>
        )
    }
    return(
        <Box>
            {displaySearchForm}
        </Box>
    );
}

export default SearchForm;