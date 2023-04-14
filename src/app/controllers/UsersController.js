const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { collection, addDoc, getDocs, doc, setDoc, query, where, docRef, docSnap, getDoc } = require("firebase/firestore");


class UsersController {


    // [GET] /news/:slug
    show(req, res) {

        var data = {}

        async function connectdb() {

            try {
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);

                const docRef = doc(db, "Users", "LRm1FQNE508Zwfg4FiX0");
                const docSnap = await getDoc(docRef);
                
                data = {
                    avatar:docSnap.data().avatar,
                    email:docSnap.data().email,
                    fullname:docSnap.data().fullname,
                    phonenumber:docSnap.data().phonenumber,
                }
                

            } catch (error) {
                console.log('connect fail')
            }
           console.log(data.thumbnail)
            res.render('user',{data});

        }
        connectdb()
    }
}

module.exports = new UsersController();

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