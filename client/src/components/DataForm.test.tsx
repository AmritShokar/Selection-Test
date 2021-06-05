import { render } from '@testing-library/react';

import DataForm from './DataForm';

test('form data fields exist', () => {
    const { getByText } = render(<DataForm open={true} toggle={() => { }}/>);

    getByText("date");
    getByText("country");
    getByText("city");
    getByText("address");
    getByText("feedType");
    getByText("feedAmount");
    getByText("numDucks");
});