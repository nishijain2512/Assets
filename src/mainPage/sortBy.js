import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, makeStyles, Select, FormControl, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
  }));

const SortBy = (props) => {
    const classes = useStyles();

    const [sortOption, setSortOption] = React.useState(props.sortOptions[0]);

    function sortByChangeHandler(event) {
        console.log(event.target.value);
        setSortOption(event.target.value);
    } 

    let sortByMenuItem = props.sortOptions.map(element => {
        return (
            <MenuItem key={element} value={element}>{element}</MenuItem>
        );
    });

    return (
        <Box>
            <Typography width="20" display="inline">Arrange By</Typography>
            <FormControl variant="outlined" display="inline" className={classes.formControl}>
                <Select
                    value={sortOption}
                    onChange={sortByChangeHandler}
                    displayEmpty
                    >
                    {sortByMenuItem}   
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortBy;