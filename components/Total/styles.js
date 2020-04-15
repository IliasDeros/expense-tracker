import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: '#FFF'
  }
})

export function StyledTotal({ children }) {
  return <Text style={styles.text}>
    {children}
  </Text>
}