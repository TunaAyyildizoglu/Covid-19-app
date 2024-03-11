import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './Store';

test('renders app with header and map', () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  // Check if HeaderAndMap component renders some text
  const headerTextElement = getByText(/Header Text/i);
  console.log(headerTextElement); // Output element to console
  expect(headerTextElement).toBeInTheDocument();

  // Check if HeaderAndMap component renders a map
  const mapElement = getByTestId('map');
  console.log(mapElement); // Output element to console
  expect(mapElement).toBeInTheDocument();
});

test('navigates to Covid statistics page', () => {
  const { getByText, history } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  // Click on a link to Covid statistics page
  const linkElement = getByText(/Covid Statistics/i);
  console.log(linkElement); // Output element to console
  fireEvent.click(linkElement);

  // Check if the URL has changed to the detail path
  console.log(history.location.pathname); // Output pathname to console
  expect(history.location.pathname).toBe('/detail');

  // Assuming your CovidStatisticsComponent renders some text or content
  const covidTextElement = getByText(/Covid Statistics Content/i);
  console.log(covidTextElement); // Output element to console
  expect(covidTextElement).toBeInTheDocument();
});
