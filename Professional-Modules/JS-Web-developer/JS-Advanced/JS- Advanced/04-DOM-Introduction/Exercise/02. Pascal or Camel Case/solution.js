function solve() {
  const inputText = document.getElementById('text').value;
  const caseType = document.getElementById('naming-convention').value;

  let result = "";

  switch (caseType) {
    case "Camel Case":
      result = convertToCamelCase(inputText);
      break;
    case "Pascal Case":
      result = convertToPascalCase(inputText);
      break;
    default:
      result = "Error!";
      break;
  }
  function convertToCamelCase(inputText) {
    const words = inputText.toLowerCase().split(' ');

    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join('');
  }

  function convertToPascalCase(inputText) {
    const words = inputText.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join('');
  }

  document.getElementById('result').textContent = result;
}

