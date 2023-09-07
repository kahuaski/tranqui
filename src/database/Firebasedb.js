import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKQLu1lXThS8VoVJTZkfxyhAfvzLrHAI0",
  authDomain: "tranqui-server.firebaseapp.com",
  "databaseURL": "https://tranqui-server.firebaseio.com",
  projectId: "tranqui-server",
  storageBucket: "gs://tranqui-server.appspot.com",
  messagingSenderId: "51404382971",
  appId: "1:51404382971:web:7e2153be9048ca470a465e",
  measurementId: "G-M24E2MN401",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);
export const storage = getStorage(app);
/*export async function uploadFile(file) {
  try {
    const storageRef = ref(storage, `products/${Date.now()}`);
    await uploadBytes(storageRef, file)
    //console.log(load);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    alert(`aqui esta el  error ${error}`);
  }
}
*/