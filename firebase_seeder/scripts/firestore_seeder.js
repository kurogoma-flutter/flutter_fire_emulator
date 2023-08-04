import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, connectFirestoreEmulator } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import firebaseConfig from './firebase_config.js';

// Firebase初期化
const firebaseApp = initializeApp(firebaseConfig);

// Firestoreインスタンス取得
const db = getFirestore(firebaseApp);

// エミュレーター設定
connectFirestoreEmulator(db, 'localhost', 8080);

const todoDataList = [
    {
        id: 1,
        title: 'タスク1',
        description: 'タスク1の説明',
        isDone: false,
    },
    {
        id: 2,
        title: 'タスク2',
        description: 'タスク2の説明',
        isDone: false,
    },
    {
        id: 3,
        title: 'タスク3',
        description: 'タスク3の説明',
        isDone: false,
    },
    {
        id: 4,
        title: 'タスク4',
        description: 'タスク4の説明',
        isDone: false,
    },
    {
        id: 5,
        title: 'タスク5',
        description: 'タスク5の説明',
        isDone: false,
    },
];

const todoCollection = collection(db, 'todos');

for (const todo of todoDataList) {
    const docId = uuidv4();
    const todoDoc = doc(todoCollection, docId);

    // documentIdの設定
    todo.documentId = docId;

    try {
        await setDoc(todoDoc, todo);
        console.log(`Added todo with ID: ${docId}`);
    } catch (e) {
        console.error(`Error adding todo with ID: ${docId}`, e);
    }
}