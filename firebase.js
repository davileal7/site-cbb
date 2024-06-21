
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAT9nA8uGmPQe_vVvUy2b7j_oq-XgOd4OQ",
authDomain: "site-cbb-nfd.firebaseapp.com",
databaseURL: "https://site-cbb-nfd-default-rtdb.firebaseio.com",
projectId: "site-cbb-nfd",
storageBucket: "site-cbb-nfd.appspot.com",
messagingSenderId: "310613801251",
appId: "1:310613801251:web:fe4b8622e1addcaaebf496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"

const db = getDatabase();




var numNFCBB = document.getElementById("NFeCBB")
var numNFDevolucao = document.getElementById("NFeDevolucao")
var cnpj = document.getElementById("cnpj")
var email_Cliente = document.getElementById("Email")
var valor = document.getElementById("Valor")
var telefone = document.getElementById("Telefone")

var Insbtn = document.getElementById("Insbtn")





function EnviarNFD(){
    set(ref(db, "NFD/"+ cnpj.value), {
        Numero_NF_CBB: numNFCBB.value,
        Numero_NF_Devolucao: numNFDevolucao.value,
        Email_CLiente: email_Cliente.value,
        Valor: valor.value,
        Telefone: telefone.value,
    }).then(() => {
       alert("NFD enviada com sucesso") 
    }).catch((error)=> {
        alert("falha, error"+error)
    })
}

Insbtn.addEventListener('click', EnviarNFD)