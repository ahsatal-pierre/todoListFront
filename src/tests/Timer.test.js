/* eslint-disable testing-library/prefer-find-by */
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Timer from '../components/Timer';

describe('Timer', () => {
 it('allows the user to set and start a countdown timer', async () => {
 jest.useFakeTimers();

 render(<Timer />);

 fireEvent.change(screen.getByLabelText(/Hours:/i), { target: { value: '1' } });
 fireEvent.change(screen.getByLabelText(/Minutes:/i), { target: { value: '30' } });
 fireEvent.change(screen.getByLabelText(/Seconds:/i), { target: { value: '15' } });

 expect(screen.getByText(/01:30:15/i)).toBeInTheDocument();

 fireEvent.click(screen.getByText(/Start/i));

 act(() => {
    jest.advanceTimersByTime(1000);
  });

 await waitFor(() => expect(screen.getByText(/01:30:14/i)).toBeInTheDocument());

 jest.useRealTimers();
 });
});
