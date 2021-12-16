export default async function postScores(user, score) {
  const postData = { user, score };
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DOVVH12mgm37io5xT1rR/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    },
  );
}
