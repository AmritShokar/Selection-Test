import { useState, ChangeEvent, FormEvent, FormEventHandler } from 'react';
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

    const onResponse = (data: any) => {
        console.log(data);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        httpClient(requestOptions, onResponse);

        toggle();
    }
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        // console.log(e.target.id);
    
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
                        name="date"
                        type="date"
                        variant="outlined"
                        label="Date"
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        onChange={onChange}
                    />
                    <br/>

                    <TextField
                        name="country"
                        type="text"
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                        label="Country"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        name="city"
                        type="text"
                        variant="outlined"
                        label="City"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        name="address"
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Address"
                        margin="normal"
                        onChange={onChange}
                    />
                    
                    <TextField
                        name="feedType"
                        type="text"
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                        label="Feed Type"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        name="feedAmount"
                        type="number"
                        variant="outlined"
                        label="Amount of Feed"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">g</InputAdornment>,
                        }}
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        name="numDucks"
                        type="number"
                        variant="outlined"
                        label="Number of Ducks"
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
