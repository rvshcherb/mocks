import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('check status ok', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: '5',
  });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 5');
});

test('check status not ok', () => {
  fetchData.mockReturnValue({
    status: 'Not Found',
  });
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
