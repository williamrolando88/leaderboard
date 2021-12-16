const render = (element) => {
  const scoreEntry = document.createElement('tr');
  const nameTd = document.createElement('td');
  nameTd.classList.add('px-2');
  nameTd.textContent = element.user;
  scoreEntry.appendChild(nameTd);
  const scoreTd = document.createElement('td');
  scoreTd.classList.add('px-2');
  scoreTd.textContent = element.score;
  scoreEntry.appendChild(scoreTd);
  return scoreEntry;
};

export default function appendElements(array) {
  const tableContent = document.querySelector('#table-content');
  while (tableContent.firstChild) {
    tableContent.removeChild(tableContent.firstChild);
  }
  array.forEach((element, i) => {
    const scoreEntry = render(element);
    if (i % 2 !== 0) {
      scoreEntry.classList.add('bg-stone-200');
    }
    tableContent.appendChild(scoreEntry);
  });
  return tableContent;
}
