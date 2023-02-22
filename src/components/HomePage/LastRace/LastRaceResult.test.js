import { render, screen } from '@testing-library/react';
import LastRaceResult from './LastRaceResult';
import { lastRaceResultMock } from './LastRaceResult.mock';

test('LastRaceResult: works', () => {
  render(<LastRaceResult data={lastRaceResultMock} />);
  const lastRaceWinner = screen.getByText(/max verstappen/i);
  expect(lastRaceWinner).toBeInTheDocument();
});
