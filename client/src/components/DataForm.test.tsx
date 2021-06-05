import { render } from '@testing-library/react';

import DataForm from './DataForm';

test('form data fields exist', () => {
    const { getByLabelText } = render(<DataForm open={true} toggle={() => { }}/>);

    getByLabelText("date");
    getByLabelText("country");
    getByLabelText("city");
    getByLabelText("address");
    getByLabelText("feedType");
    getByLabelText("feedAmount");
    getByLabelText("numDucks");

});