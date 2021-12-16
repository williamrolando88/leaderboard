import appendElements from './appendElements.js';

const refresh = async (e) => {
  e.preventDefault();
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DOVVH12mgm37io5xT1rR/scores/',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );
  const scores = await response.json();
  appendElements(scores.result);
};

export default refresh;
