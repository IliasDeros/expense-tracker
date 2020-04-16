import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { TotalCircle } from './TotalCircle/index'
import { circleSize, StyledTotal } from './TotalCircle/styles'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: circleSize,
  },

  totalContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
})

export function TotalContainer({ partnerExpenses, selfExpenses, touchableProps }) {
  let total = partnerExpenses.reduce((acc, cur) => acc - cur.value, 0)
  total = selfExpenses.reduce((acc, cur) => acc + cur.value, total)
  let totalDisplay = total

  if (total < 0) {
    totalDisplay = -total
  }

  return <TouchableOpacity style={styles.container} {...touchableProps}>
    <TotalCircle total={total}/>

    <View style={styles.totalContainer}>
      <StyledTotal total={totalDisplay} />
    </View>
  </TouchableOpacity>
}