// firebaseConfig.js
// Realizando as importações necessárias
import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage'                                     

// Configurando as credenciais vindas do firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkO96NbrQgo-Hr4mL8khCMOSAGvXE4a9c",
  authDomain: "estuda-ai-9b6d2.firebaseapp.com",
  projectId: "estuda-ai-9b6d2",
  storageBucket: "estuda-ai-9b6d2.appspot.com",
  messagingSenderId: "687352190710",
  appId: "1:687352190710:web:03187c2eab93fa015e3ed7",
  measurementId: "G-FBL9BFCCRE"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o Firebase Auth (para autentificação) com AsyncStorage para persistência de dados
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

// Obtendo o firestore (nosso banco de dados)
const database = getFirestore(app);

// Obtendo o storage do firebase (imagens/videos)
const storage = getStorage(app)

// Exportando as funções que vão ser usadas no app
export { auth, database, storage };

// Exportando o app como default (o código apresenta um erro se não fizer assim, não consegui resolver de outra forma)
export default app;