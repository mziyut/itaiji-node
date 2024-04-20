export const seijitai = (str: string): string => {
  const dict = require('./dict/seijitai.json');
  return str
    .split('')
    .map((c) => dict[c] || c)
    .join('');
};
