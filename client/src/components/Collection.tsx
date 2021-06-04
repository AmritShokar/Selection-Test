import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

const Collection = () => {
    return (
        <div>
            <TableContainer component={Paper}>
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

                        

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Collection
