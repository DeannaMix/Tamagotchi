import build from './makeCard';
import quadrants from '../Data/petData';

import '../styles/main.scss';

const init = () => {
  quadrants.getCards().forEach((quadrant) => {
    build.makeCard(quadrant);
  });
};

init();
