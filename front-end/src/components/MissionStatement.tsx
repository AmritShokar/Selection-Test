import { useState } from 'react';

import DataForm from './DataForm';

const MissionStatement = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    }

    return (
        <div>
            <button onClick={() => { setIsDialogOpen(!isDialogOpen) }}>Test</button>
            <DataForm open={isDialogOpen} toggle={toggleDialog}/>
        </div>
    )
}

export default MissionStatement
