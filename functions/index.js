const starGenerator = (number = 5) => {
  const numberOfStars = number;
  let starsArray = [];
  for (let i = 0; i < numberOfStars; i++) {
    starsArray = [
      ...starsArray,
      {
        top: `${Math.floor(Math.random() * 100)}`,
        left: `${Math.floor(Math.random() * 100)}`,
        className: i % 2 == 0 ? 'star1' : 'star',
      },
    ];
  }
  return starsArray;
};

export { starGenerator };
