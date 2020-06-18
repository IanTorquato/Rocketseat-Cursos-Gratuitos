import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Funcionou!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e414d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#c3ebe2',
    fontSize: 40
  }
});
