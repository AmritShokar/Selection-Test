import { useState } from 'react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';

import DataForm from './DataForm';

import landing from '../res/duck-landing-image.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
        height: '100vh',
        backgroundImage: `url(${landing})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
  })
);

const MissionStatement = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const classes = useStyles();

    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    }

    return (
        <div className={classes.background}>
            <Grid>
                <button onClick={() => { setIsDialogOpen(!isDialogOpen) }}>Test</button>
                <DataForm open={isDialogOpen} toggle={toggleDialog}/>
            </Grid>
        </div>
    )
}

export default MissionStatement
