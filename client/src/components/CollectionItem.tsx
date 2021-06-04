import { TableRow, TableCell } from '@material-ui/core';

import FeedEntry from '../models/FeedEntry';

interface CollectionItemProps {
    entry: FeedEntry
}

const CollectionItem = ({ entry }: CollectionItemProps) => {
    const { id, feedDate, country, city, address, feedType, feedAmount, numDucks } = entry;
    return (
        <>
            <TableRow>
                <TableCell>{id}</TableCell>  
                <TableCell align="right">{feedDate}</TableCell>
                <TableCell align="right">{country}</TableCell>
                <TableCell align="right">{city}</TableCell>
                <TableCell align="right">{address}</TableCell>
                <TableCell align="right">{feedType}</TableCell>
                <TableCell align="right">{feedAmount}</TableCell>
                <TableCell align="right">{numDucks}</TableCell>
            </TableRow>
        </>
    )
}

export default CollectionItem
