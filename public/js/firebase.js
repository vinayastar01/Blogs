let firebaseConfig = {
  apiKey: "AIzaSyBbfqcB3Dpba6bQJmmq_9_d4rqdBbNB41Y",
  authDomain: "blog-website-200ba.firebaseapp.com",
  projectId: "blog-website-200ba",
  storageBucket: "blog-website-200ba.appspot.com",
  messagingSenderId: "513920789071",
  appId: "1:513920789071:web:3176406a5cca8887a9983a",
};

 firebase.initializeApp(firebaseConfig);

 let db = firebase.firestore();
 let auth = firebase.auth();

 const logoutUser = () => {
  auth.signOut();
  location.reload();
 }

