import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyMap from '../MyMaps';

test('clicking on a country navigates to detail page with correct query parameters', () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <MyMap />
      </BrowserRouter>
    );

    const input = getByRole('path', { describedby: /leaflet-tooltip-1559/i });
    console.log(input);

});
