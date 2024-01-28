function solve() {
   let textArea = document.getElementsByTagName('textarea')[0];
   let productsList = [];
   
   
   let addButtons = Array.from(document.getElementsByClassName('add-product'));
   
   for (const button of addButtons) {
      button.addEventListener('click', addProduct);
   }
   
   let checkOutButtonEventAdd = document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut);

   function addProduct(e){
      const product = e.currentTarget.parentNode.parentNode;

      const productName = product.querySelector('.product-details .product-title').textContent;
      const productPrice = Number(product.querySelector('.product-line-price').textContent).toFixed(2);
      
      if (productsList[productName]) {
         productsList[productName] += Number(productPrice);
      }
      else{
         productsList[productName] = Number(productPrice);
      }

      textArea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
   }

   function checkOut(e){

      let productsBought = [];
      let totalPrice = 0;

      for (const product in productsList) {
         totalPrice += productsList[product];
         productsBought.push(product);
      }

      textArea.textContent += `You bought ${productsBought.join(', ')} for ${totalPrice.toFixed(2)}.`;

      for (const button of addButtons) {
         button.disabled = true;
      }

      let checkOutButtonDisable = document.getElementsByClassName('checkout')[0].disabled = true;
   }
}