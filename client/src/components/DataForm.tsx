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
    const initialState: IFeed = {
        feedDate: new Date(),
        country: '',
        city: '',
        address: '',
        feedType: '',
        feedAmount: 0,
        numDucks: 0
    };
    const [formData, setFormData] = useState<IFeed>(initialState);
    const [fieldError, setFieldError] = useState('');

    const requestOptions: AxiosRequestConfig = {
        method: 'POST',
        url: 'http://localhost:4444/api/v1/submissions/entry',
        data: formData
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        httpClient(requestOptions, () => { });
        toggle();
        setFormData(initialState);
    };
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });

        validate(e.target)
    }

    const validate = (field: EventTarget & HTMLInputElement) => {
        setFieldError('');
        const { id, value } = field;
        
        switch(id) {
            case 'country':
                if(value.length > 50) {
                    setFieldError('country must be under 50 characters');
                } else if (value.length < 2) {
                    setFieldError('country must have at least 2 characters');
                }
                break;
            case 'city':
                if(value.length > 50) {
                    setFieldError('city must be under 50 characters');
                } else if (value.length < 2) {
                    setFieldError('city must have at least 2 characters');
                }
                break;
            case 'address':
                if(value.length > 50) {
                    setFieldError('address must be under 50 characters');
                } else if (value.length < 2) {
                    setFieldError('address must have at least 2 characters');
                }
                break;
            case 'feedType':
                if(value.length > 30) {
                    setFieldError('feed type must be under 30 characters');
                } else if (value.length < 2) {
                    setFieldError('feed type must have at least 2 characters');
                }
                break;
            case 'feedAmount':
                if(parseInt(value) > 999999) {
                    setFieldError('feed amount must be under 999999 g');
                } else if (parseInt(value) < 1) {
                    setFieldError('feed amount be at least 1 g');
                }
                break;
            case 'numDucks':
                if(parseInt(value) > 999) {
                    setFieldError('number of ducks must be under 999');
                } else if (parseInt(value) < 1) {
                    setFieldError('must have fed at least one duck');
                }
                break;
            default:
        }
    }

    return (
        <Dialog open={open}>
            <DialogTitle disableTypography>
                <Typography variant="h4">Feeding Information</Typography>
            </DialogTitle>
            <DialogContent>
                {fieldError ? (<Typography variant="body1" color="error">{ fieldError }</Typography>) : <br/>}
                <form onSubmit={onSubmit}>
                    <TextField
                        required
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
                        required
                        id="country"
                        type="text"
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                        label="country"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        required
                        id="city"
                        type="text"
                        variant="outlined"
                        label="city"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        required
                        id="address"
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="address"
                        margin="normal"
                        onChange={onChange}
                    />
                    
                    <TextField
                        required
                        id="feedType"
                        type="text"
                        variant="outlined"
                        style={{ marginRight: '1em' }}
                        label="feedType"
                        margin="normal"
                        onChange={onChange}
                    />

                    <TextField
                        required
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
                        required
                        id="numDucks"
                        type="number"
                        variant="outlined"
                        label="numDucks"
                        margin="normal"
                        onChange={onChange}
                    />
                    
                    <DialogActions>
                        <Button 
                            variant="contained" 
                            onClick={() => { toggle(); setFormData(initialState); }} 
                            color="default">
                                Cancel
                        </Button>

                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary"
                            disabled={fieldError === '' ? false : true}>
                                Submit
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DataForm
