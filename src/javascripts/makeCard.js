const makeCard = (quadrant) => {
  const {
    actionName,
    button1,
    button2,
    buttonChange1,
    buttonChange2,
    level
  } = quadrant;
  $(`#${actionName}`).html(`
    <div class="pet-card-${actionName}">
        <h1 class="card-name">${actionName}</h1>
        <div class="level-info"> Click to interact with your hamham!</div>
        <div class="buttons">
            <button class="do-something" id="button1-${actionName}">${button1}</button>
            <button class="do-something" id="button2-${actionName}">${button2}</button>
        </div>
        <div class="level">Current Level: ${level}</div>
    </div>
    `);
  $(`#button1-${actionName}`).on('click', () => {
    if (level + buttonChange1 < 100) {
      // eslint-disable-next-line
      quadrant.level = quadrant.level + buttonChange1;
    }
    makeCard(quadrant);
  });
  $(`#button2-${actionName}`).on('click', () => {
    if (level + buttonChange2 < 100) {
      // eslint-disable-next-line
      quadrant.level = quadrant.level + buttonChange2;
    }
    makeCard(quadrant);
  });
};

export default { makeCard };
