import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_fire_emulator/application.dart';

import 'firebase_instance.dart';
import 'firebase_options.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  if (kDebugMode) {
    firestore.useFirestoreEmulator('localhost', 8080);
    auth.useAuthEmulator('localhost', 9099);
    storage.useStorageEmulator('localhost', 9199);
    print('Emulator mode enabled');
  }

  runApp(const Application());
}
