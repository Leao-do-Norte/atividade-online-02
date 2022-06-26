//ALGORITMO CADASTRO DE EVENTOS - EMPRESA SAVINIS
//ÂNGELO VINÍCIUS BARRETO TAVARES - TURMA FULL-STACK 13

var idade = 25;
var dataEvento = new Date(2022,05,25); // AAAA - MM - DD;
var dataHoje = new Date();
var listaParticipantes = ["alpha","bravo","charlie","delta","echo"];
var listaPalestrantes = ["aleatorio1","aleatorio2","aleatorio3"];

console.log("Informe sua idade");
console.log(idade);
    if (idade < 18){
        console.log("Cadastro negado: o usuário deve ser maior de 18 anos");
    }else{
        console.log("Digite a data do evento (somente números)");
        console.log(dataEvento.toLocaleString()); // A DATA NO TERMINAL DIFERE POR 1 MÊS DA VARIÁVEL DECLARADA NO CÓDIGO 
        if (dataEvento.getTime() < dataHoje.getTime()){
            console.log("Cadastro negado: data inválida");
        }else{
            console.log("informe os nomes dos participantes");
            console.log(listaParticipantes);
            if(listaParticipantes.length > 100){
                console.log("Cadastro negado: limite de participantes excedido");
            }else{
                console.log("Digite os nomes dos palestrantes");
                console.log(listaPalestrantes)
                console.log("Cadastro finalizado, até a próxima.")
            }
        }
        
    }