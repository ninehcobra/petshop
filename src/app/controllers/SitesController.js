// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { collection, addDoc, getDocs, doc, setDoc, query, where, getDoc } = require("firebase/firestore");
const {getAuth} = require("firebase/auth")


const db = require('../../config/db')



class SiteController {
    // [GET] /
    index(req, res, next) {
        var data = []

        async function connectdb() {

            try {
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);


                const q = query(collection(db, "Products"));
         
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((item) => {
                    let fullname="BAS";


                    // async function sellername(sellerId) {
                    //     const app = initializeApp(firebaseConfig);
                    //     const db1 = getFirestore(app);
                    //     const docRef = doc(db1, "Users", sellerId);
                    //     const docSnap = await getDoc(docRef);
                    //     fullname= docSnap.data().fullname.toString()
                        
                    // }
                    


                    let discount;
                    if (parseFloat(item.data().oldprice) == 0) {
                        discount = 0;
                    }
                    else { discount = parseInt(100 - ((parseFloat(item.data().price) / parseFloat(item.data().oldprice)) * 100)) }


                    
                   
                    var item = {
                        ratingvalue:item.data().feedbacks.length,
                        sellername: fullname,
                        Id: item.id,
                        maxQuantity: item.data().maxQuantity,
                        price: Intl.NumberFormat().format(item.data().price),
                        description: item.data().description,
                        category: item.data().category,
                        tendtodecreaseQuantity: item.data().tendtodecreaseQuantity,
                        status: item.data().status,
                        sellerID: item.data().sellerID,
                        oldprice: Intl.NumberFormat().format(item.data().oldprice),
                        feedbacks: item.data().feedbacks,
                        thumbnail: item.data().thumbnail,
                        productname: item.data().productname,
                        uploaddate: item.data().uploaddate,
                        images: item.data().images,
                        discount: discount,
                    }
                    data.push(item)

                });



            } catch (error) {
                console.log('connect fail')
            }

            res.render('home', { data })

        }
        connectdb()

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();





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
