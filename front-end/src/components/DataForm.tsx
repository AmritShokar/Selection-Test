import FormGroup from '@material-ui/core/FormGroup';
import Divider from '@material-ui/core/Divider';

import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles, createStyles, Theme, InputAdornment, Button } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

type FormProps = {
    open: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin: theme.spacing(10)
    },
    test: {
        marginLeft: '2em'
    }
  })
);

const DataForm = ({ open }: FormProps) => {
    const classes = useStyles();

    return (
        <Dialog open={open}>
            <DialogTitle>
                <Typography variant="h4">Submit Feeding Information</Typography>
            </DialogTitle>
            <DialogContent>
                <form>
                    <TextField
                        type="date"
                        variant="outlined"
                        label="Date"
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                    />
                    <br/>

                    <TextField
                        type="text"
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                        label="Country"
                        margin="normal"
                    />

                    <TextField
                        type="text"
                        variant="outlined"
                        label="City"
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Address"
                        margin="normal"
                    />
                    
                    <TextField
                        type="text"
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                        label="Feed Type"
                        margin="normal"
                    />

                    <TextField
                        type="number"
                        variant="outlined"
                        label="Amount of Feed"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">g</InputAdornment>,
                        }}
                        margin="normal"
                    />

                    <TextField
                        type="number"
                        variant="outlined"
                        label="Number of Ducks"
                        margin="normal"
                    />
                    
                    <DialogActions>
                        <Button variant="contained" color="default">
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DataForm
