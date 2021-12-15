const render = (element) => {
  const scoreEntry = document.createElement('tr');
  const nameTd = document.createElement('td');
  nameTd.textContent = element.name;
  scoreEntry.appendChild(nameTd);
  const scoreTd = document.createElement('td');
  scoreTd.textContent = element.score;
  scoreEntry.appendChild(scoreTd);
  return scoreEntry;
};

const appendElements = (array) => {
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
};

export default { appendElements };
