import firebaseConfig from "./config.js";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc, Timestamp} from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function addMessage(sender, message) {
    return await addDoc(collection(db, "messages"), {
        date: Timestamp.now(),
        from: sender,
        message: message
    })
}

export {addMessage};
