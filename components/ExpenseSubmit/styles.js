import React from 'react'
import { Button, View } from 'react-native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    margin: 8,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  }
})

export const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

export const StyledButton = (props) => (
  <View style={styles.button}>
    <Button {...props} />
  </View>
)