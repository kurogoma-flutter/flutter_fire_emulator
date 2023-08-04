import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } from 'firebase/auth';

import firebaseConfig from './firebase_config.js';

// Initialize
const firebaseApp = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(firebaseApp);

// Connect to emulator
connectAuthEmulator(auth, 'http://localhost:9099');

// ダミーデータ一覧
const users = [
    {
        email: 'test.user.1@gmail.com',
        password: 'password',
        displayName: 'テストユーザー1',
    },
    {
        email: 'test.user.2@gmail.com',
        password: 'password',
        displayName: 'テストユーザー2',
    },
];

// ユーザー登録
users.forEach(async (user) => {
    await createUserWithEmailAndPassword(auth, user.email, user.password); // Corrected line
});
