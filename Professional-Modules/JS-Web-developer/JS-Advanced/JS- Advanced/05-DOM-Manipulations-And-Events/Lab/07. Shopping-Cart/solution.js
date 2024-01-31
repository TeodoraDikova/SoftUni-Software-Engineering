function solve() {
   Array.from(document.querySelectorAll('.add-product')).forEach(x => x.addEventListener('click', add));
   document.querySelector('.checkout').addEventListener('click', checkout);

   const products = {
      'Bread': 0.8,
      'Milk': 1.09,
      'Tomatoes': 0.99
   }

   const bought = [];
   const textAreaRef = document.querySelector('body > div > textarea'); 

   let cost = 0;
   let textOutput = '';

   function add(event) {
      const current = event.target.parentNode.parentNode.querySelector('.product-title').textContent;
      textOutput += `Added ${current} for ${products[current].toFixed(2)} to the cart.\n`;

      cost += products[current];
      if (!bought.includes(current)) {
         bought.push(current);
      }
   }

   function checkout(event){
      textOutput += `You bought ${bought.join(', ')} for ${cost.toFixed(2)}.`;
      textAreaRef.value += textOutput;
      Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
   }
}