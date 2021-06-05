import { useState, ChangeEvent, FormEvent } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, InputAdornment, Button } from '@material-ui/core';
import { AxiosRequestConfig } from 'axios';

import IFeed from '../models/FeedEntry';
import httpClient from '../lib/HttpClient';

interface FormProps {
    open: boolean,
    toggle: () => void
}

const DataForm = ({ open, toggle }: FormProps) => {
    const [formData, setFormData] = useState<IFeed>({
        feedDate: new Date(),
        country: '',
        city: '',
        address: '',
        feedType: '',
        feedAmount: 0,
        numDucks: 0
    });

    const requestOptions: AxiosRequestConfig = {
        method: 'POST',
        url: 'http://localhost:4444/api/v1/submissions/entry',
        data: formData
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        httpClient(requestOptions, () => { });
        toggle();
    }
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    return (
        <Dialog open={open}>
            <DialogTitle disableTypography>
                <Typography variant="h4">Feeding Information</Typography>
            </DialogTitle>
            <DialogContent>
                <form onSubmit={onSubmit}>
                    <TextField
                        id="date"
                        type="date"
                        variant="outlined"
                        label="date"
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        onChange={onChange}
                    />
                    <br/>

                    <TextField
                        id="country"
                        type="text"
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                        label="country"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        id="city"
                        type="text"
                        variant="outlined"
                        label="city"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        id="address"
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="address"
                        margin="normal"
                        onChange={onChange}
                        value="tea"
                    />
                    
                    <TextField
                        id="feedType"
                        type="text"
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                        label="feedType"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        id="feedAmount"
                        type="number"
                        variant="outlined"
                        label="feedAmount"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">g</InputAdornment>,
                        }}
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        id="numDucks"
                        type="number"
                        variant="outlined"
                        label="numDucks"
                        margin="normal"
                        onChange={onChange}
                    />
                    
                    <DialogActions>
                        <Button variant="contained" onClick={toggle} color="default">Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DataForm
