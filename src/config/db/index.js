// Import the functions you need from the SDKs you need
const { initializeApp }=require("firebase/app");
const { getDatabase } =require("firebase/database");
const { getFirestore } =require("firebase/firestore");
const { collection, addDoc, getDocs, doc, setDoc, query, where, } =require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUXegiu1MsuNdYB8mM9nbcmxmIOvbExoc",
    authDomain: "buyandsellproject-753ab.firebaseapp.com",
    databaseURL: "https://buyandsellproject-753ab-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "buyandsellproject-753ab",
    storageBucket: "buyandsellproject-753ab.appspot.com",
    messagingSenderId: "830096715156",
    appId: "1:830096715156:web:13deb2fdd9edd4f24b3381",
    measurementId: "G-CV563YDE2P"
};

// Initialize Firebase
async function connect(){
    try{
        const app = initializeApp(firebaseConfig);
        const db=getFirestore(app)
        console.log('connect thanh cong')
        const q=query(collection(db,"Products"));
        const querSnapshot= await getDocs(q);
        querSnapshot.forEach((doc) => {
            // console.log(doc.id+"=>"+doc.data())
        }
        )
    }
    catch(error){
        console.log('connect that bai')
    }
    
   
}

module.exports= connect