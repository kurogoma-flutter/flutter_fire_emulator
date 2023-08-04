import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, connectStorageEmulator } from 'firebase/storage';
import fs from 'fs';

import firebaseConfig from './firebase_config.js';

// Initialize
const firebaseApp = initializeApp(firebaseConfig);

// Storageのインスタンス取得
const storage = getStorage(firebaseApp);

// エミュレーター設定
connectStorageEmulator(storage, 'localhost', 9199);

const imagePathList = [
    'images/kurogoma.png',
];

for (const imagePath of imagePathList) {
    // ファイルの読み込み
    fs.readFile(imagePath, async (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        // Storageの参照を取得
        const storageRef = ref(storage, imagePath);

        // ファイルをアップロード
        try {
            const snapshot = await uploadBytes(storageRef, data);
            console.log('Uploaded the file:', snapshot.metadata.name);
        } catch (e) {
            console.error('Error uploading the file:', e);
        }
    });
}


