import { useState } from 'react';
import { Box, Grid, Button, createStyles, makeStyles, Theme, Typography, Snackbar } from '@material-ui/core';

import DataForm from './DataForm';

import landing from '../res/duck-landing-image.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
        height: '70vh',
        backgroundImage: `url(${landing})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '8em'
    },
    grid: {
        paddingTop: '5em',
        paddingLeft: '5em'
    },
    heading: {
        color: 'white',
        fontFamily: 'Roboto'
    },
    subHeading: {
        color: 'white',
        fontFamily: 'Roboto',
        marginTop: '1em'
    },
    formButton: {
        marginTop: '8em',
        marginLeft: '17em'
    }
  })
);

const Landing = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSuccessMsgOpen, setIsSuccessMsgOpen] = useState(false);
    const classes = useStyles();

    const toggleDialog = (success: boolean) => {
        setIsDialogOpen(!isDialogOpen);
        if (success) {
            setIsSuccessMsgOpen(true);
        }
    }

    const onCloseSuccessMessage = () => {
        setIsSuccessMsgOpen(false);
    }

    return (
        <Box className={classes.background}>
            <Grid container className={classes.grid}>
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.heading}>We need your help!</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" className={classes.subHeading}>
                        Take a minute to help us better understand how ducks are fed
                    </Typography>
                </Grid>

                <Button 
                    variant="contained" 
                    className={classes.formButton} 
                    onClick={() => { setIsDialogOpen(!isDialogOpen) }}>
                        Help Us Out!
                </Button>

                <DataForm open={isDialogOpen} toggle={toggleDialog}/>
                <Snackbar 
                    open={isSuccessMsgOpen}
                    anchorOrigin={{'vertical': 'top', 'horizontal': 'right'}}
                    message="Form submitted. Thank you!"
                    onClose={onCloseSuccessMessage}
                    autoHideDuration={5000}/>
            </Grid>
        </Box>
    )
}

export default Landing;
