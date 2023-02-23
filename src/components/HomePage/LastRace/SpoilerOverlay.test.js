import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { renderWithReduxProvider } from '../../../utils/test/reduxProvider';
import SpoilerOverlay from './SpoilerOverlay';

test('LastRace: spoiler overlay getting rendered', () => {
  renderWithReduxProvider(<SpoilerOverlay />);

  const spoilerOverlay = screen.getByTestId('spoiler-overlay');
  expect(spoilerOverlay).toBeInTheDocument();
});

test('LastRace: spoiler overlay getting hidden when clicked', async () => {
  renderWithReduxProvider(<SpoilerOverlay />);
  const spoilerOverlay = screen.queryByTestId('spoiler-overlay');
  expect(screen.getByTestId('spoiler-overlay')).toBeInTheDocument();

  fireEvent.click(spoilerOverlay);
  await waitForElementToBeRemoved(screen.queryByTestId('spoiler-overlay'));
  expect(screen.queryByTestId('spoiler-overlay')).toBeNull();
});
