import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PanoramaWideAngleIcon from '@material-ui/icons/PanoramaWideAngle';
import Body from '../components/body'
import NavigationIcons from '../components/navigation'

const Header = () => {

    return(
    <div >
      <Grid container spacing={12}>
        <Grid item xs={1}>
          <Paper>
              <div style = {{backgroundColor:'#999999', height:650, textAlign:'center'}}>
                <NavigationIcons />
              </div>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper>
              <div style = {{height:650}}>
                <div style = {{height:55, backgroundColor:'#FFFFFF'}}>
                    <div style = {{paddingLeft:20, paddingRight:20, paddingTop:10}}>    
                        <div style = {{float:'left', flexWrap:'wrap', display:'flex', alignItems:'center'}}>
                            <PanoramaWideAngleIcon style = {{fontSize:50, color:'black'}}/>
                            <p style = {{color:'black', fontSize:24, paddingLeft:10}}>Logo</p>
                        </div>

                        <div style = {{float:'right'}}>
                            <div style = {{height:30, width:100, backgroundColor:'#F4F0EF', textAlign:'center'}}>
                                <p style = {{paddingTop:5, color:'black', fontSize:16}}>User name</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style = {{backgroundColor:'#F4F0EF', height:550}}>
                    <p style = {{color:'black', fontSize:16, paddingLeft:20}}>
                        <div>
                        <p style = {{color:'black', fontSize:24, paddingLeft:20, paddingTop:20}}>Page Title</p>
                        </div>
                        <Body />
                    </p>
                </div>
              </div>
          </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}

export default Header;
