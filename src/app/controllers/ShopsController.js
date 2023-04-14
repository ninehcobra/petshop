const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { collection, addDoc, getDocs, doc, setDoc, query, where, getDoc } = require("firebase/firestore");

var data= []
async function abc(item)
{
    if(item){
    const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);
                const docRef = doc(db, "Products", item);
                const docSnap = await getDoc(docRef);
                var item1 = {
                    ratingvalue:docSnap.data().feedbacks.length,
                    Id: item,
                    maxQuantity: docSnap.data().maxQuantity,
                    price: Intl.NumberFormat().format(docSnap.data().price),
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
                    images: docSnap.data().images,
                }
                data.push(item1)
    }

}

class ShopsController {

    // [GET] /news/:slug
    show(req, res) {
        async function getdb(){
        
        async function connectdb() {

            try {
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);
                const docRef = doc(db, "Users", req.params.Id);
                const docSnap = await getDoc(docRef);
                if(docSnap)
                {
                docSnap.data().products.forEach(item => {
                    abc(item)
                });
            }

                

            } catch (error) {
                console.log('connect fail')
            }
    
            res.render('home',{data});

        }
        await connectdb()
        var data1=[]
        data=data1
    }
    getdb()
    }
}

module.exports = new ShopsController();

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