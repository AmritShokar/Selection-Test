import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import FormGroup from '@material-ui/core/FormGroup';
import Divider from '@material-ui/core/Divider';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

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
                Duck Submission Form
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

                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="location"
                        margin="normal"
                    />
                
                
                    <TextField
                        type="text"
                        variant="outlined"
                        label="food type"
                        margin="normal"
                    />

                    <TextField
                        type="text"
                        variant="outlined"
                        label="amount"
                        margin="normal"
                    />

                    <TextField
                        type="text"
                        variant="outlined"
                        label="number"
                        margin="normal"
                    />
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DataForm
