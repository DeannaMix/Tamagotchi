const cardData = [
  {
    actionName: 'Eat',
    button1: 'Eat: Healthy Food',
    button2: 'Eat: Unhealthy Food',
    level: 100,
    buttonChange1: 10,
    buttonChange2: -3,
  },
  {
    actionName: 'Play',
    button1: 'Play: Super Fun!',
    button2: 'Play: Slightly Fun',
    level: 50,
    buttonChange1: 50,
    buttonChange2: 2,
  },
  {
    actionName: 'Fight',
    button1: 'Run Away (bravely)',
    button2: 'Commit Violence',
    level: 100,
    buttonChange1: 1,
    buttonChange2: -10,
  },
  {
    actionName: 'Sleep',
    button1: 'Nap',
    button2: 'Deep Slumber',
    level: 50,
    buttonChange1: 20,
    buttonChange2: 30,
  },
];

const getCards = () => cardData;

export default { getCards };
