import React from 'react'
import { Button, View } from 'react-native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    margin: 12,
  },
})

export const StyledButton = (props) => (
  <View style={styles.button}>
    <Button {...props} />
  </View>
)