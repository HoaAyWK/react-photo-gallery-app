import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { storage, fireStore } from '../firebase/config';


const useStorage = (file) => {
    const [progess, setProgess] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snapshot) => {
            const persentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            setProgess(persentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            const createdAt = serverTimestamp();
            await addDoc(collection(fireStore, 'images'), {
                url,
                createdAt
            });
            setUrl(url);
        } )
    }, [file]);

    return { progess, url, error };
}

export default useStorage;