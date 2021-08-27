import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { fireStore } from '../firebase/config';

const useFireStore = (imagesCollection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const imagesRef = collection(fireStore, 'images');
        const orderedImages = query(imagesRef, orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(orderedImages, (snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents)
        }); 
        return () => unsub();      
    }, [imagesCollection]);

    return { docs };
}

export default useFireStore;