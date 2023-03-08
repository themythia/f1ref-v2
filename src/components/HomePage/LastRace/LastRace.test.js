import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import LastRace from './LastRace';
import { renderWithReduxProvider } from '../../../utils/test/reduxProvider';
import { useFetch } from '../../../utils/useFetch';
import {
  errorResponseMock,
  loadingResponseMock,
  validResponseMock,
} from './LastRace.mock';

jest.mock('../../../utils/useFetch', () => {
  return {
    useFetch: jest.fn(),
  };
});

describe('LastRace unit tests:', () => {
  test('component getting rendered with spoiler overlay with a valid response', () => {
    useFetch.mockImplementation(() => validResponseMock);

    renderWithReduxProvider(<LastRace />);

    const lastRace = screen.getByTestId('last-race');
    expect(lastRace).toBeInTheDocument();

    const spoilerOverlay = screen.getByTestId('spoiler-overlay');
    expect(spoilerOverlay).toBeInTheDocument();
  });

  test('spoiler overlay gets hidden on click', async () => {
    useFetch.mockImplementation(() => validResponseMock);

    renderWithReduxProvider(<LastRace />);
    const spoilerOverlay = screen.queryByTestId('spoiler-overlay');
    expect(screen.getByTestId('spoiler-overlay')).toBeInTheDocument();

    fireEvent.click(spoilerOverlay);
    await waitForElementToBeRemoved(screen.queryByTestId('spoiler-overlay'));
    expect(screen.queryByTestId('spoiler-overlay')).toBeNull();
  });

  test('Component renders 3 result items', () => {
    useFetch.mockImplementation(() => validResponseMock);

    renderWithReduxProvider(<LastRace />);

    const lastRaceResultItems = screen.getAllByTestId('last-race-result');
    expect(lastRaceResultItems).toHaveLength(3);
  });

  test('renders a loading spinner while fetching data', () => {
    useFetch.mockImplementation(() => loadingResponseMock);

    renderWithReduxProvider(<LastRace />);

    const loadingSpinner = screen.getByTestId('last-race');
    expect(loadingSpinner).toBeInTheDocument();
  });

  test('renders a error message if an error occured while fetching data', () => {
    useFetch.mockImplementation(() => errorResponseMock);

    renderWithReduxProvider(<LastRace />);

    const error = screen.getByTestId('error');
    expect(error).toBeInTheDocument();
  });
});
