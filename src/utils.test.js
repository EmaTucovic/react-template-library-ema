import {square} from "./utils"
import Hello from './Hello';
import { render, waitForElement, fireEvent } from 'react-testing-library';
import React from 'react'

test('square 2 to equal 4', () => {
  expect(square(2)).toBe(4);
});



it('renders personalized greeting', async  () => {
    // Render new instance in every test to prevent leaking state
    const { getByText } = render(<Hello/>);
  
    await waitForElement(() => getByText(/Ema/i));
  });