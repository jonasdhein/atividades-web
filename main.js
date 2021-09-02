function ChamarNome() {
    let var_nome = document.getElementById("nome").value;
    alert('Nome digitado foi: ' + var_nome);
}

function Contar() {
    var soma = 0;
    for (var index = 1; index <= 100; index++) {
        soma += index;
    }
    alert("Soma de 1 a 100 é: " + soma);
}

function Nomes() {
    var confirmado = confirm("Deseja prosseguir com o código?");

    if (confirmado) {
        let pessoas = ["João", "José", "Maria", "Sebastião", "Antônio"];
        //for(var i in pessoas){
        //    console.log(pessoas[i])
        //}
        for (var i = 0; i < pessoas.length; i++) {
            console.log(pessoas[i] + " tem " + 
                pessoas[i].length + " letras");

            if (pessoas[i].length == 4) {
                alert(pessoas[i]);
            }
        }
    }
}