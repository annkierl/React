import { collection,onSnapshot } from "firebase/firestore"
import {db} from '../firebase/firebase'
export const studentsData=collection(db, 'Students')
export const getDataFromFirebase=(snapshot)=>{
    return  snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

}