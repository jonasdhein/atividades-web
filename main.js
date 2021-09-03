function pegarTamanhoNome() {
    var var_nome = document.getElementById("nome").value;
    var var_cidade = document.getElementById("cidade").value;
    
    if(var_nome.trim() == ''){
        Swal.fire({
            title: 'Ops!',
            text: 'Nome está em branco',
            icon: 'info',
            confirmButtonText: 'Ok'
          })
    }else if(var_cidade.trim() == ''){
        alert('Cidade está em branco')
    }else{
        var string_texto = var_nome + ' tem ' + var_nome.length 
                            + ' letras';
        string_texto += '\nCidade: ' + var_cidade
        
        alert(string_texto);
    }
}

function calcularTabuada(){
    var var_tabuada = document.getElementById("tabuada").value;
    var lista = "";
    for (var index = 0; index <= 10; index++) {
        var resultado = var_tabuada * index;
        lista += index + '' + ' x ' 
            + var_tabuada + ' = ' + resultado + '<br>';
    }
    document.getElementById("span_tabuada").innerHTML = lista;
}

function contar() {
    var soma = 0;
    for (var index = 1; index <= 100; index++) {
        soma += index;
    }
    alert("Soma de 1 a 100 é: " + soma);
}

function nomes() {
    var confirmado = confirm("Deseja prosseguir com o código?");

    if (confirmado == true) {
        let pessoas = ["João", "José", "Maria", "Sebastião", "Antônio"];
        //for(var i in pessoas){
        //    console.log(pessoas[i])
        //}
        for (var i = 0; i < pessoas.length; i++) {
            console.log(pessoas[i] + " tem " + 
                pessoas[i].length + " letras");

            //if (pessoas[i].length == 4) {
            //    alert(pessoas[i]);
            //}
        }
    }
}