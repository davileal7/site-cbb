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


function consulta_cnpj() {
    const numeroDigitado_cnpj = inputNumero_cnpj.value;
  
    // Referência para o nó do CNPJ específico
    const cnpjRef = database.ref('cnpj/' + numeroDigitado_cnpj);
  
    cnpjRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        const dados = snapshot.val();
        resultado_cnpj.textContent = `COD CLI: ${dados.cod_cli} V1: ${dados.v1} V2: ${dados.v2} FICHA: ${dados.ficha}`;
      } else {
        resultado_cnpj.textContent = "Número não encontrado.";
      }
    });
  }