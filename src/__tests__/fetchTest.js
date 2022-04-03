import fetchData from '../http';

test('check error', () => {
  expect(() => fetchData('https://server/user/1')).toThrow('Mock this!');
});
