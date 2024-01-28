function search() {
   let searchText = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));

   let result = document.getElementById('result');

   let matches = 0;

   towns.forEach(town => {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';
   });

   for (const town of towns) {

      if (town.textContent.includes(searchText)) {

         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';

         matches++;
      }
   }

   result.textContent = `${matches} matches found`;
}
