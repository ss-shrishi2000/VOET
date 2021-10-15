import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

import Main from './components/Main/Main';
import Details from './components/Details/Details';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid classname={classes.grid} container spacing={4} alignItems="center" justify="center" style={ {height:'100vh' }} >

         <Grid item xs={12} sm={4} >
            <Details title="Income" /> 
         </Grid>

         <Grid item xs={12} sm={4} >
            <Main />
         </Grid>

         <Grid item xs={12} sm={4} >
            <Details title="Expense" /> 
         </Grid>

      </Grid>
    </div>
  );
}

export default App;
