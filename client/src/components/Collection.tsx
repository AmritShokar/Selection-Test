import { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, makeStyles, createStyles, Theme } from '@material-ui/core';
import { AxiosRequestConfig } from 'axios';

import httpClient from '../lib/HttpClient';
import FeedEntry from '../models/FeedEntry';
import CollectionItem from './CollectionItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableContainer: {
        
    }
  })
);

const Collection = () => {
    const classes = useStyles();
    const [feedEntries, setFeedEntries] = useState<FeedEntry[]>([]);
    const requestOptions: AxiosRequestConfig = {
        method: 'GET',
        url: 'http://localhost:4444/api/v1/submissions'
    }

    useEffect(() => {
        httpClient(requestOptions, response);
    }, []);

    const response = (entries: FeedEntry[]) => {
        console.log(entries);
        setFeedEntries([...entries]);
    }

    return (
        <div>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Country</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Feed Type</TableCell>
                            <TableCell align="right">Feed Amount</TableCell>
                            <TableCell align="right">Number Of Ducks</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {feedEntries.map((entry) => {
                            return <CollectionItem entry={entry}/>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Collection
