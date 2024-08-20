// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYYp97Ao7-_DxxGmTu7NPRDC2FZdJFLDg",
  authDomain: "cbb-cadastro.firebaseapp.com",
  databaseURL: "https://cbb-cadastro-default-rtdb.firebaseio.com",
  projectId: "cbb-cadastro",
  storageBucket: "cbb-cadastro.appspot.com",
  messagingSenderId: "826130353391",
  appId: "1:826130353391:web:3d1ca11f63fc22afc8df1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js"

const db = getDatabase();

var form_cadastro = document.getElementById("modalForm_cadastro")
var RazaoSocial = document.getElementById("razao_social");
var CnpjCpf = document.getElementById("cnpj_cpf");
var NomeFantasia = document.getElementById("nome_fantasia");
var TelWhats = document.getElementById("tel_whats");
var Email = document.getElementById("e_mail");
var Vendedor = document.getElementById("vendedor");
var Supervisor = document.getElementById("supervisor");
var DiaVisita = document.getElementById("dia_visita");

var btnEnviar = document.getElementById("cadastro");


function Solicitar_cadastro(){
  const dataHora_cad = new Date();
  const horaFormatada_cad = dataHora_cad.toLocaleString();

if (RazaoSocial.value === '') {
alert("Preencha o CNPJ/CPF");
return;
}

set(ref(db, "Cadastro/" + RazaoSocial.value),
{
    Cnpj_CPF: CnpjCpf.value,
    Nome_Fantasia: NomeFantasia.value,
    Tel_Whats_App: TelWhats.value,
    Email: Email.value,
    Vendedor: Vendedor.value,
    Supervisor: Supervisor.value,
    Dia_Visita: DiaVisita.value,
    Hora_do_Cadastro: horaFormatada_cad,
})
.then(() => {
  alert("Solicitação enviada com sucesso");
  alert("O setor de cadastro entrará em contato para solicitar documentos adicionais caso necessário.");
  form_cadastro.reset();
})
.catch((error) => {
  alert("falha, error" + error);
});
}

btnEnviar.addEventListener('click', Solicitar_cadastro);






