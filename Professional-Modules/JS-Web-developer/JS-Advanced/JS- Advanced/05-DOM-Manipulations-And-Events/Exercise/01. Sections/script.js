function create(words) {
   let contentRef = document.getElementById('content');

   words.forEach(string => {

      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = string;

      div.appendChild(p);
      p.style.display = 'none'

      div.addEventListener('click', onClick);

      contentRef.appendChild(div);

   });

   function onClick(event) {
      const pElement = event.currentTarget.querySelector('p');

      pElement.style.display = pElement.style.display === 'none' ? 'block' : 'none';
   }
}