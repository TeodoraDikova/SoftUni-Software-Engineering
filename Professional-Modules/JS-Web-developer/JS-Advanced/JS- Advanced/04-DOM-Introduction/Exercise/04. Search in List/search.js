function search() {
   const towns = Array.from(document.querySelectorAll('ul#towns>li'));
   const searchText = document.querySelector('input#searchText').value;
   let resultDiv = document.querySelector('div#result');

   let matches = 0;
   towns.forEach(townLiElement => {
      let townName = townLiElement.textContent;
      if (searchText && townName.indexOf(searchText) >= 0) {
         townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++;
      }
   });
   resultDiv.textContent = `${matches} matches found`;
}