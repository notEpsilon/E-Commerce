import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAggHB8AwCD2C6cwDqSPRN1fb7trCn_0JM",
    authDomain: "crown-ecommerce-project.firebaseapp.com",
    projectId: "crown-ecommerce-project",
    storageBucket: "crown-ecommerce-project.appspot.com",
    messagingSenderId: "217929612855",
    appId: "1:217929612855:web:86bf96d82a55c67a6709b2",
    measurementId: "G-PET9P2KLTH"
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (err) {
            alert('error creating user', err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;