import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navigation from './Navigation';
import { useState } from 'react';

export default function App() {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
