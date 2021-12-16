import appendElements from './appendElements';

export default async function refresh(e) {
  e.preventDefault();
  let response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DOVVH12mgm37io5xT1rR/scores/',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );
  let scores = await response.json();
  console.log(scores.result);
  appendElements(scores.result);
}
