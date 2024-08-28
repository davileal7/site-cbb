// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwl0JvXHZMnLsic2zS2bu0Ne8jlqlRMZY",
  authDomain: "consulta-cbb.firebaseapp.com",
  databaseURL: "https://consulta-cbb-default-rtdb.firebaseio.com",
  projectId: "consulta-cbb",
  storageBucket: "consulta-cbb.appspot.com",
  messagingSenderId: "564790071043",
  appId: "1:564790071043:web:fa361e6e001fb523056336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Referência para o banco de dados
const database = firebase.database();

import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const db = getDatabase();

var Buscar = document.getElementById("buscar_cnpj")
var Numero_cnpj = document.getElementById("numero_cnpj")

function SelectData(){
  const dbref = ref(db);

  get(child(dbref,Numero_cnpj.value)).then((snapshot) => {
      if(snapshot.exists()){
        
      }
      else {
          alert("Não")
      }
  }).catch((error) => {
      alert("falha, error"+error);
  })

}

Buscar.addEventListener('click', SelectData)








