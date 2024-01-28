function solve() {

  const text = Array.from(document.getElementById('text').value.toLowerCase().split(" "));
  const convention = document.getElementById('naming-convention').value;

  let result = document.getElementById('result');

  let output = [];

  if (convention === 'Camel Case') {
    
    output.push(text.shift(0));

    for (let i = 0; i < text.length; i++) {

      let word = text[i].charAt(0).toUpperCase();
      word += text[i].slice(1);

      output.push(word)
    }
    console.log(output.join(""));
  }
  else if(convention === 'Pascal Case'){

    for (let i = 0; i < text.length; i++) {
      
      let word = text[i].charAt(0).toUpperCase();
      word+= text[i].slice(1);
      
      output.push(word);
    }
  }
  else{
    output.push('Error!');
  }

  result.textContent = output.join("");
}