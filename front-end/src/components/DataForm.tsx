import { ChangeEvent, FormEvent } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, InputAdornment, Button } from '@material-ui/core';


const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("see this submit");
}

const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    
}

type FormProps = {
    open: boolean,
    toggle: () => void
}

const DataForm = ({ open, toggle }: FormProps) => {
    return (
        <Dialog open={open}>
            <DialogTitle disableTypography>
                <Typography variant="h4">Feeding Information</Typography>
            </DialogTitle>
            <DialogContent>
                <form onSubmit={onSubmit}>
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
                        <Button variant="contained" onClick={toggle} color="default">Cancel</Button>
                        <Button variant="contained" color="primary">Submit</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DataForm
