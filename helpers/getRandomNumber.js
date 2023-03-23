const getRandomInt = (x, y, exclude) => {
  const min = Math.ceil(x);
  const max = Math.floor(y);
  const randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randNumber === exclude) {
    return getRandomInt(x, y, exclude);
  }
  return randNumber;
};

export default getRandomInt;
