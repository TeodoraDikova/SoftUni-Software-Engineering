function solve() {
  let inputText = document.getElementById("input").value;
  let outputElement = document.getElementById("output");

  inputText
      .match(/(?:\s*)([^.!?]+[.!?]+)/g)
      .map(sentence => sentence.trim())
      .reduce((acc, sentence, index) => {
          if (index % 3 === 0) {
              acc.push([sentence]);
          } else {
              acc[acc.length - 1].push(sentence);
          }

          return acc;
      }, [])
      .forEach(paragraph => {
          let parHTML = document.createElement('p');
          parHTML.textContent = paragraph.join(' '); // Join sentences into a paragraph
          outputElement.appendChild(parHTML);
      });
}