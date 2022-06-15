import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let x;
    if (idCategory) {
        x = query(collection(db, "productos"), where('categoryid', '==', idCategory));
    } else {
        x = query(collection(db, "productos"), orderBy('nombre'));
    }
    const querySnapshot = await getDocs(x);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: id,
          ...docSnap.data()
      }
    } else {
     
 console.log("Doc no encontrado");
    }
}