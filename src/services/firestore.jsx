import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import products from "../products/productos";


const firebaseConfig = {
    apiKey: "AIzaSyDPtMfbMz0MRZ_pQw5IhhNubC744GXhlJY",
    authDomain: "proyectofinalreact-c41c3.firebaseapp.com",
    projectId: "proyectofinalreact-c41c3",
    storageBucket: "proyectofinalreact-c41c3.appspot.com",
    messagingSenderId: "218901162300",
    appId: "1:218901162300:web:56819092ee5b02384d5639",
    measurementId: "G-DXGZMEC0DF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createOrder(orderData) {
    const collectionRef = collection(db, 'orders');
    
    const response = await addDoc(collectionRef, orderData);
    console.log('Orden creada correctamente', response.id);
    return response.id
}

export async function exportData() {
    for (let item of products) {
        const collectionRef = collection(db, 'products');
        const {id} = await addDoc(collectionRef, item);
        console.log('Documento creado', id);
    }
}