export const fetchMock = (data) =>
  jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );
