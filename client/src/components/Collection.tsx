import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper, makeStyles, createStyles, Theme } from '@material-ui/core';

import httpClient from '../lib/HttpClient';
import FeedEntry from '../models/FeedEntry';
import CollectionItem from './CollectionItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    tableContainer: {
        width: '80vw',
        marginTop: '5em',
    }
  })
);

const Collection = () => {
    const classes = useStyles();
    const [feedEntries, setFeedEntries] = useState<FeedEntry[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const requestOptions: AxiosRequestConfig = {
            method: 'GET',
            url: process.env.REACT_APP_SERVER_URL + '/submissions'
        }
        
        httpClient(requestOptions, response);
    }, []);

    const response = (status: number, entries: FeedEntry[]) => {
        setFeedEntries([...entries]);
    }

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Country</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Feed Type</TableCell>
                            <TableCell align="right">Feed Amount</TableCell>
                            <TableCell align="right">Number Of Ducks</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {feedEntries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((entry) => {
                                return <CollectionItem key={entry.id} entry={entry}/>
                            })}
                    </TableBody>
                </Table>

                <TablePagination
                component="div"
                count={feedEntries.length}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10,15,25]}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </TableContainer>
        </div>
    )
}

export default Collection
