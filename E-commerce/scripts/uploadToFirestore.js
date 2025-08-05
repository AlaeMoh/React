const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
const products = require("./products.json");

// 🔑 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

(async () => {
  for (let product of products) {
    try {
      await addDoc(collection(db, "products"), product);
      console.log(`✅ Uploaded: ${product.title || product.productName}`);
    } catch (err) {
      console.error("❌ Error uploading:", err);
    }
  }
})();
