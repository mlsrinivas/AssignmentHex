import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';

const UserProfile = () => {
    const cityNames = [{label: 'Hyderabad', value: 'HYD'}, {label: 'Mumbai', value: 'Mumbai'}, {label: 'Bangalore', value: 'BNGLR'}, {label: 'Pune', value: 'Pune'}];
    const [city, setCity] = useState();
    const [fName, setFname] = useState();
    const [lName, setLname] = useState();
    const [email, setEmail] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();





  const handleChange = (event) => {
    setCity(event.target.value);
  };
    return(
        <div style = {{height:300, width:'100%'}}>
            <div style = {{display:'flex', textWrap:'wrap'}}>
                <div style = {{paddingLeft:50}}>
                    <p>Enter First Name</p>
                    <TextField label="First Name" value = {fName} onChange={(e) => setFname(e.target.value)}/>
                </div>
                <div style = {{paddingLeft:150}}>
                    <p>Enter Last Name</p>
                    <TextField label="Last Name" value = {lName} onChange={(e) => setLname(e.target.value)}/>
                </div>
                <div style = {{paddingLeft:150}}>
                    <p>Enter Email</p>
                    <TextField label="Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                </div>                
            </div>
            <div style = {{display:'flex', textWrap:'wrap', paddingTop:20, paddingLeft:50}}>
                <div>
                    <p>Enter Address1</p>
                    <TextField label="Address1" value = {address1} onChange={(e) => setAddress1(e.target.value)}/>
                </div>
                <div style = {{paddingLeft:150}}>
                    <p>Enter Address2</p>
                    <TextField label="Address2" value = {address2} onChange={(e) => setAddress2(e.target.value)}/>
                </div>
                <div style = {{paddingLeft:150}}>
                    <p>Enter City</p>
                    <TextField
                        select
                        label="Select City"
                        value={city}
                        onChange={handleChange}
                        style = {{width:'300%'}}
                        >
                        {cityNames.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>                
            </div>
            <div style = {{paddingRight:150, paddingTop:30}}>
                <Button type = {'submit'} style = {{color:'black', backgroundColor:'#F4F0EF', float:'right'}} onClick = {()=>{alert('submited')}}>Submit</Button>
            </div>

        </div>
    )
}

export default UserProfile;