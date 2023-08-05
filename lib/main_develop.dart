import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_fire_emulator/application.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();

  final firestore = FirebaseFirestore.instance;
  final auth = FirebaseAuth.instance;

  if (kDebugMode) {
    firestore.useFirestoreEmulator('localhost', 8080);
    auth.useAuthEmulator('localhost', 9099);
  }
  runApp(const Application());
}
