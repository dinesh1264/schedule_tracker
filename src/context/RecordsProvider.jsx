import React, { createContext, useContext, useEffect, useState } from 'react'
import { onSnapshot,collection } from 'firebase/firestore'
import { db } from '../firebase'

const RecordsContext = createContext([]);

export const RecordsProvider = ({children}) => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db,"progress"),(querySnapshot) => {
            const docs = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}));
            setRecords(docs);
        });
        return () => unsubscribe();
    },[])

  return (
    <RecordsContext.Provider value={records}>
        {children}
    </RecordsContext.Provider>
  )
}

export const useRecordsContext = () =>  useContext(RecordsContext);
