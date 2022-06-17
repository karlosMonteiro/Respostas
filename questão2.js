// let numero = Number(prompt("Digite um número")); // para web
let numero = 50;
let array = [0, 1];
let teste = false;
for(let x = 2; x < numero; x++){
  array[x] = array[x-1] + array[x-2];
}
for(let x = 0; x < numero; x++){
  if(numero == [x]){
        teste = true;
  } else {
        teste = false;
  }
}
if(teste == true){
    console.log(`o numero ${numero} está na sequencia de Fibonacci`);
    console.log(array);

} else {
    console.log(`o numero ${numero} não está na sequencia de Fibonacci`);
    console.log(array);
}