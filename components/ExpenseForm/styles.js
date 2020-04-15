import { StyleSheet } from 'react-native'

export const inputSize = 18

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 8
  },

  input: {
    padding: 8,
    textAlign: 'center',
    color: '#FFF',
    minWidth: 200,
    fontSize: inputSize,
  },

  icon: {
    color: '#FFF',
  },


  iconContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  }
})