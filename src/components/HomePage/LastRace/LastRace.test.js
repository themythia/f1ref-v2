import { screen, waitFor } from '@testing-library/react';
import LastRace from './LastRace';
import { lastRaceMock } from './LastRace.mock';
import { renderWithProviders } from '../../../utils/test/reduxProvider';
import { fetchMock } from '../../../utils/test/fetchMock';

global.fetch = fetchMock(lastRaceMock);

beforeEach(() => {
  fetch.mockClear();
});

test('LastRace: works', async () => {
  renderWithProviders(<LastRace />);

  await waitFor(() => {
    const lastRaceTitle = screen.getByText(/last race/i);
    expect(lastRaceTitle).toBeInTheDocument();
  });
});
