function solve() {

  let input = Array.from(document.getElementById('input').value
  .split('.')
  .filter(x=> x.length > 0)
  .map(x => x += '.'));

  let resultOutput = document.getElementById('output');

  while (input.length > 0) {

    let paragraph = document.createElement('p');

    paragraph.textContent = (`<p> ${input.splice(0, 3).join('')} </p>`);

    resultOutput.appendChild(paragraph);
  }
}