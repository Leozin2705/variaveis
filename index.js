const {time} = require('console');

const prompt = require('prompt-sync');
const entrada = prompt();


let anoAtual = 2024;
let idade = (17);
const nomeCompleto = "Leonardo Lopes ";
const faculdade = "Engenharia Mecanica";
let cidadeAtual = "SJP";
let lazer = "Dormir";

console.log(`salve, eu sou o ${nomeCompleto}, tenho ${idade} anos, moro em ${cidadeAtual} e no ano que vem quero estar cursando ${faculdade}`);

anoAtual = 2025;
idade = 18;
cidadeAtual = "SJP";
depoisMarço = "Engenharia";
lazer = "Viajar";

console.log(`para o ano de ${anoAtual} espero estar com uma vida boa e bem estruturado`);

//agencia de viagens
console.log("_________________")
console.log("       LOGIN      ")
console.log("_________________")

const loginCerto = "Leonardo";
const senhaCerta = "270507";

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto) {
  console.log("Login Não encontrado");
  login = entrada("Digite seu login: ");
}

var nomeComprador = entrada("qual é o seu nome?");
var cpfComprador = entrada("qual é o seu cpf?");
var idadeComprador = entrada("qual é a sua idade?");
const listaDeDestinos= new array(
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba",
  "Salvador",
  "Fortaleza"
);

console.log(`Olá senhor ${nomeComprador}, seu CPF é ${cpfComprador} e sua idade é ${idadeComprador} anos, e você deseja viajar para ${listaDeDestinos}`);

console.log(listaDeDestinos[2]);
console.log("");
console.log(`Olá senhor ${nomeComprador}, adicionamos mais uma viagem para sua lista de interesses.`);

listaDeDestinos.push("Brasília");

console.log(listaDeDestinos);
if (idadeComprador<17){
  console.log("Você não pode viajar pois é menor de idade");
}
if (idadeComprador>18){
  console.log(`Parabéns, conseguimos uma passagem`);
}
if (idadeComprador>18){
  console.log(`Parabéns nós pudemos lhe vender uma passagem, estes são os destinos disponíveis ${listaDeDestinos}`)
}