import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserList from '../components/userList'
import UserProfile from '../components/userProfile'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    width:'90%'
  },
}));

const Body = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} style = {{color:'black', backgroundColor:'white'}}
        indicatorColor={'black'}>
          <Tab label="User List"  />
          <Tab label="User Profile"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <UserList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserProfile />
      </TabPanel>
      
    </div>
  );
}

export default Body;
