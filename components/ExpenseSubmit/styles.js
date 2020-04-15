import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
})

export const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
)