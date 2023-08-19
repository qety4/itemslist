import { initializeApp } from 'firebase/app'
import { Post } from '../../types/types';
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    Auth,
    NextOrObserver,
    User
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    DocumentData,
    QueryDocumentSnapshot,
    orderBy,
    startAt, 
    limit
} from 'firebase/firestore'


const app = initializeApp({
    apiKey: "AIzaSyDMPHuliULj8rfEhHPi-Xqx93yGnJWvm1E",
    authDomain: "itemslist-c90f6.firebaseapp.com",
    projectId: "itemslist-c90f6",
    storageBucket: "itemslist-c90f6.appspot.com",
    messagingSenderId: "369955797671",
    appId: "1:369955797671:web:33008edc6dd83b04ee3982"

});


const provider = new GoogleAuthProvider()



export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const db = getFirestore()



export const addCollectionAndDocuments = async <T extends Post>(collectionKey: string, objToAdd: T): Promise<void> => {
    const collectionRef = collection(db, collectionKey)
    const bacth = writeBatch(db)

    const docRef = doc(collectionRef)
    console.log('docREf',docRef.id)
    const dataObject:Post= {
        ...objToAdd,
        id:docRef.id,
        cratedAt: new Date()
    }
    bacth.set(docRef, dataObject);
    await bacth.commit()
    console.log("done")
}

export const getInitalPosts= async (): Promise<Post[]> => {
    const collectionRef = collection(db, 'posts')
    const q = query(collectionRef, limit(5))
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Post)
}

export const getNextPosts = async (lastPost:Post): Promise<Post[]> => {
    const collectionRef = collection(db, 'posts')
    const q = query(collectionRef, orderBy('cratedAt'),startAt(lastPost), limit(5))  
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Post)
}

export type AdditionalInfo = {
    displayName?: string
}
export type UserData = {
    displayName: string,
    email: string,
    createdAt: string,
}


export const createUserDocumentFromAuth = async (userAuth: User, additionalinformation = {} as AdditionalInfo): Promise<void | QueryDocumentSnapshot<UserData>> => {

    if (!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth

        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalinformation
            })
        } catch (e) {
            console.log('error creating project', e)
        }
    }

    return userSnapshot.data() as QueryDocumentSnapshot<UserData>
};



export const createAuthUser = async (email: string, password: string) => { //With Email and Password

    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInWithEmail = async (email: string, password: string) => {

    if (!email && !password) return
    const userCred = await signInWithEmailAndPassword(auth, email, password)
    return userCred.user
}

export const signOutUser = async () => signOut(auth)

export const authStateListener = (callback: NextOrObserver<User>) => {
    if (!callback) return
    onAuthStateChanged(auth, callback)
}

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const stopListener = onAuthStateChanged(
            auth,
            (userAuth) => {
                stopListener();
                resolve(userAuth)
            },
            reject
        );
    });
}