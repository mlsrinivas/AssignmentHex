import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import EcoIcon from '@material-ui/icons/Eco';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { useHistory } from "react-router-dom";



const NavigationIcons = () => {
    const history = useHistory();

    return(
        <div>
            <div style = {{height:80, width:'100%', backgroundColor:'black'}}>
                <HomeIcon style = {{fontSize:50, color:'#FFFFFF', marginTop:20}}
                    onClick = {() => {history.push("/")}}/><br />
            </div>
                <EcoIcon style = {{fontSize:50, color:'#FFFFFF', marginTop:20}}
                onClick = {() => {history.push("/Eco")}}/><br />
                <VisibilityIcon style = {{fontSize:50, color:'#FFFFFF', marginTop:20}}
                onClick = {() => {history.push("/Visibility")}}/><br />
                <PermContactCalendarIcon style = {{fontSize:50, color:'#FFFFFF', marginTop:20}}
                onClick = {() => {history.push("/Contact")}}/><br />
        </div>
    )
}

export default NavigationIcons;