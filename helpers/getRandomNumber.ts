// @ts-expect-error TS(7023): 'getRandomInt' implicitly has return type 'any' be... Remove this comment to see the full error message
const getRandomInt = (x: any, y: any, exclude: any) => {
  const min = Math.ceil(x);
  const max = Math.floor(y);
  const randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randNumber === exclude) {
    return getRandomInt(x, y, exclude);
  }
  return randNumber;
};

export default getRandomInt;
