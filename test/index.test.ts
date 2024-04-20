import { seijitai } from '../src/index';

describe('seijitai', () => {
  test('itaiji to seijitai', () => {
    expect(seijitai('亞')).toBe('亜');
  });

  test('itaiji to seijitai', () => {
    expect(seijitai('ß')).toBe('s');
  });

  test('not itaiji to seijitai', () => {
    expect(seijitai('あ')).toBe('あ');
  });
});
