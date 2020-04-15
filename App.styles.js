import React from 'react'
import { StyleSheet, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function AppContainer({ children }) {
  return <View style={styles.container}>
    {children}
  </View>
}