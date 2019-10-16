import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCEoihG_P7XVzHe_vat6L1U4DoBll5MgJk",
  authDomain: "crown-db-a5810.firebaseapp.com",
  databaseURL: "https://crown-db-a5810.firebaseio.com",
  projectId: "crown-db-a5810",
  storageBucket: "",
  messagingSenderId: "200724092996",
  appId: "1:200724092996:web:26a1f6e68d320e57c9c411",
  measurementId: "G-24FF87JHG1"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  /* If user does not exist in our db */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch
    .commit()
    .then(() => console.log('Collections loaded successfully!'))
    .catch(error => console.log("Error loading data", error));
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); 
/*
provider.addScope('profile');
provider.addScope('email');
*/
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




