import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDsrdFXOQNVtAoA4W-OZIn__GRL_ndHPxc",
    authDomain: "javascript-alumnos.firebaseapp.com",
    projectId: "javascript-alumnos",
    storageBucket: "javascript-alumnos.appspot.com",
    messagingSenderId: "304198984695",
    appId: "1:304198984695:web:2fe9d5e6b7c4f04d8544f2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  export const saveTask = (nombre, apellido, notaFinal, materia) =>{
        addDoc(collection(db, 'estudiantes'), {Nombre: nombre, Apellido: apellido, NotaFinal: notaFinal, Materia: materia})
  }

  export const getEstudiante = () => getDocs(collection(db, 'estudiantes'))
  
  export const onGetTasks = (callback) => onSnapshot(collection(db, 'estudiantes'), callback)

  export const deleteTask = (id) => deleteDoc(doc(db, 'estudiantes', id))

  export const getEst = (id) => getDoc(doc(db, 'estudiantes', id))

  export const updateEst = (id, newFields) => 
  updateDoc(doc(db, 'estudiantes', id), newFields);
