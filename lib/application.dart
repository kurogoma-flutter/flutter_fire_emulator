import 'package:flutter/material.dart';
import 'package:flutter_fire_emulator/home_page.dart';

class Application extends StatelessWidget {
  const Application({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Fire Emulator Suite',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color.fromARGB(255, 247, 173, 76),
        ),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}
