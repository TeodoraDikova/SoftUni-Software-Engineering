function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tableRowsArr = Array.from(document.querySelectorAll("tbody tr"));

   function onClick() {
      const searchFieldValue = document.getElementById("searchField").value.toLowerCase();

      tableRowsArr.forEach(curRow => {
         const rowText = curRow.textContent.toLowerCase();

         if (rowText.includes(searchFieldValue)) {
            curRow.classList.add("select");
         } else {
            curRow.classList.remove("select");
         }
      });

      document.getElementById("searchField").value = "";
   }
}        