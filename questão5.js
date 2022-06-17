function inverter(s){
    let saida = '';
    for(let i = s.length-1 ; i>= 0; i--){
        saida += s[i];
    }
    console.log(saida);
}
inverter("Juliano");
