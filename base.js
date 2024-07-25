
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyhftZU4NGYnsbHRETPMFvIaCRIKUCTWM",
  authDomain: "cbb-alteracaoprazo.firebaseapp.com",
  projectId: "cbb-alteracaoprazo",
  storageBucket: "cbb-alteracaoprazo.appspot.com",
  messagingSenderId: "778482695772",
  appId: "1:778482695772:web:64c8d593844ab7e55cf099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js"

const db = getDatabase();


var Superior = document.getElementById("name_sup")
var Vendedor = document.getElementById("name_vend")
var Cod_vend = document.getElementById("cod_vend")
var Cod_cliente = document.getElementById("cod_cliente")
var Prazo = document.getElementById("prazo")

var Insbtn = document.getElementById("soli")


function Solicitar(){
    // Verifica se todos campos foram preenchidos!
    if (Cod_cliente.value === '') {
        alert("Preencha o código do Cliente");
        return;
    }
    set(ref(db, "Solicitacao/" + "Cód Cliente: " + Cod_cliente.value), {
        Nome_Superior: Superior.value,
        Nome_Vendedor: Vendedor.value,
        Codigo_Vendedor: Cod_vend.value,
        Prazo: Prazo.value,
    }).then(() => {
       alert("Solicitação enviada com sucesso") 
        Superior.value = "",
        Vendedor.value = "",
        Cod_vend.value = "",
        Cod_cliente.value = "",
        Prazo.value = ""
    }).catch((error)=> {
        alert("falha, error"+error)
    })
}

Insbtn.addEventListener('click', Solicitar)