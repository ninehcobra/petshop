// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { collection, addDoc, getDocs, doc, setDoc, query, where, docRef, docSnap, getDoc } = require("firebase/firestore");


const db = require('../../config/db')


class ProdcutsController {
    // [GET] /:slug
    show(req, res) {

        var data = {}

        async function connectdb() {

            try {
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);

                const docRef = doc(db, "Products", req.params.Id);
                const docSnap = await getDoc(docRef);
                const docRef2 = doc(db, "Users", docSnap.data().sellerID);
                
                const docSnap2= await getDoc(docRef2)
                console.log('connect ngon')
                
                let discount;
                if(parseFloat(docSnap.data().oldprice)==0)
                {
                    discount=0;
                }
                else{discount=parseInt( 100- ((parseFloat(docSnap.data().price)/parseFloat(docSnap.data().oldprice))*100))}
                data = {
                    id:req.params.Id,
                    phonenumber:docSnap2.data().phonenumber,
                    shopname:docSnap2.data().fullname,
                    avatar:docSnap2.data().avatar,
                    maxQuantity: docSnap.data().maxQuantity,
                    price:Intl.NumberFormat().format(docSnap.data().price) ,
                    description:docSnap.data().description,
                    category: docSnap.data().category,
                    tendtodecreaseQuantity: docSnap.data().tendtodecreaseQuantity,
                    status: docSnap.data().status,
                    sellerID: docSnap.data().sellerID,
                    oldprice: Intl.NumberFormat().format(docSnap.data().oldprice),
                    feedbacks: docSnap.data().feedbacks,
                    thumbnail: docSnap.data().thumbnail,
                    productname: docSnap.data().productname,
                    uploaddate: docSnap.data().uploaddate,
                    images:docSnap.data().images,
                   discount:discount,
                }
                

            } catch (error) {
                console.log('connect fail')
            }
           console.log(data.thumbnail)
            res.render('products/product',{data});

        }
        connectdb()
    }

}

module.exports = new ProdcutsController();





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
