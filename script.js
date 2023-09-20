function Trocar() {
    var texto = document.getElementById('campoA').value;
    document.getElementById('campoB').value = texto;
    document.getElementById('campoA').value = '';
}

function Tabuada() {
    var numeroSelecionado = document.getElementById('numero').value; 
    var divTabuada = document.getElementById('tabuada');
    divTabuada.innerHTML = ''; 
    
    for ( i = 1; i <=10; i++) { 
        var resultado = numeroSelecionado * i; 
        var mostrar = `${numeroSelecionado} x ${i} = ${resultado}`;
        divTabuada.innerHTML += mostrar;
    }
}

function Tabuada2() {
    var numeroSelecionado = document.getElementById('numero').value; 
    var divTabuada = document.getElementById('tabuada');
    
    
    for ( i = 1; i <=10; i++) { 
        var resultado = numeroSelecionado * i; 
        var mostrar = `${numeroSelecionado} x ${i} = ${resultado}`;
        divTabuada.innerHTML += mostrar;
    }
}