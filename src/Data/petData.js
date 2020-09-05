const cardData = [
  {
    actionName: 'eating',
    button1: 'Eat: Healthy Food',
    button2: 'Eat: Unhealthy Food',
    level: 100,
    buttonChange1: 10,
    buttonChange2: -3,
  },
  {
    actionName: 'play',
    button1: 'Play: Super Fun!',
    button2: 'Play: Slightly Fun',
    level: 50,
    buttonChange1: 50,
    buttonChange2: 2,
  },
  {
    actionName: 'fight',
    button1: 'Run Away (bravely)',
    button2: 'Commit Violence',
    level: 100,
    buttonChange1: 1,
    buttonChange2: -10,
  },
  {
    actionName: 'sleep',
    button1: 'Nap',
    button2: 'Deep Slumber',
    level: 50,
    buttonChange1: 50,
    buttonChange2: 60,
  },
];

const getCards = () => cardData;

export default { getCards };
