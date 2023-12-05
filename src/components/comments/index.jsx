// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase

export default function Comments(){
    const firebaseConfig = {
        apiKey: "AIzaSyBNV_v7i1NVE4MhczjGwbnA9WLAXHhFUQk",
        authDomain: "teste-comments.firebaseapp.com",
        projectId: "teste-comments",
        storageBucket: "teste-comments.appspot.com",
        messagingSenderId: "1015988821974",
        appId: "1:1015988821974:web:ade0df13b4e9c621704e77",
        measurementId: "G-5KCVH57QR2"
      };

      
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 // Obter uma referência ao banco de dados do Firebase
 const db = getFirestore(app);
 // Obter os elementos do HTML
 
 // Adicionar um evento de submit ao formulário
 var listaComentarios = document.getElementById("lista-comentarios");
 
 function handleComment(e) {
     e.preventDefault();
     // Prevenir o comportamento padrão do formulário
     var formComentario = document.getElementById("form-comentario");
    

   // Obter os valores dos campos do formulário
   var nome = formComentario.nome.value;
   var comentario = formComentario.comentario.value;
   var data = new Date().toLocaleString();

   // Criar um objeto com os dados do comentário
   var dados = {
     nome: nome,
     comentario: comentario,
     data: data
   };

   // Enviar os dados para o Firebase
   db.ref("comentarios").push(dados);

   // Limpar os campos do formulário
   formComentario.reset();

   
 }
 // Adicionar um evento de value ao banco de dados do Firebase
 db.ref("comentarios").on("value", function(snapshot) {
    // Limpar a lista de comentários
    listaComentarios.innerHTML = "";
 
    // Percorrer os dados recebidos do Firebase
    snapshot.forEach(function(childSnapshot) {
      // Obter os valores dos dados
      var nome = childSnapshot.val().nome;
      var comentario = childSnapshot.val().comentario;
      var data = childSnapshot.val().data;
 
      // Criar um elemento li para cada comentário
      var li = document.createElement("li");
      li.innerHTML = "<p class='nome'>" + nome + "</p>" +
                     "<p class='texto'>" + comentario + "</p>" +
                     "<p class='data'>" + data + "</p>";
 
      // Adicionar o elemento li à lista de comentários
      listaComentarios.appendChild(li);
    });
  });

 return(
    <>
    <div id="comentarios">
        <h1>Comentários</h1>
        <ul id="lista-comentarios"></ul>
    </div>

    <div id="formulario">
    <h1>Deixe seu comentário</h1>
    <form id="form-comentario">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required/>
        <label htmlFor="comentario">Comentário:</label>
        <textarea id="comentario" name="comentario" required></textarea>
        <button type="submit" onClick={handleComment}>Enviar</button>
    </form>
    </div>
    </>
 )
}