const goats = [
  {
    id: 'goat1',
    name: 'Billy the Kid',
    age: 2,
    description: 'I like Yoga!',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg',
    isTaken: true,
  },
  {
    id: 'goat2',
    name: 'Wooly',
    age: 85,
    description: 'I like eating grass.',
    imgUrl: 'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1.jpg',
    isTaken: true,
  },
  {
    id: 'goat3',
    name: 'Vincent van Goat',
    age: 18,
    description: 'SHHHHHHH',
    imgUrl: 'https://bit.ly/2XObT0W',
    isTaken: false,
  },
  {
    id: 'goat4',
    name: 'Butter',
    age: 1,
    description: 'RAWRRRR',
    imgUrl: 'https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg',
    isTaken: false,
  },
  {
    id: 'goat5',
    name: 'Ramsey',
    age: 0.5,
    description: 'Nope',
    imgUrl: 'https://www.psephizo.com/wp-content/uploads/2018/09/1438297793139.jpeg',
    isTaken: false,
  },
];

const getGoats = () => goats;

const takeGoat = (goatId) => {
  goats.forEach((response) => {
    if (response.id === goatId) {
      response.isTaken = true;
    }
  });
};

const freeGoat = (goatId) => {
  goats.forEach((response) => {
    if (response.id === goatId) {
      response.isTaken = false;
    }
  });
};

export default { getGoats, takeGoat, freeGoat };
