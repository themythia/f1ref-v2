import { screen, waitFor } from '@testing-library/react';
import LastRace from './LastRace';
import { renderWithReduxProvider } from '../../../utils/test/reduxProvider';

test('LastRace: component getting rendered', async () => {
  renderWithReduxProvider(<LastRace />);

  await waitFor(() => {
    const lastRace = screen.getByTestId('last-race');
    expect(lastRace).toBeInTheDocument();
  });
});
