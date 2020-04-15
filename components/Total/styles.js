import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window')
const circleSize = Math.min(width, height) * 0.7

const circleStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '50%',
  borderWidth: 5,
  width: circleSize,
  height: circleSize,
  paddingTop: circleSize * 0.2,
  paddingBottom: circleSize * 0.2,
}

const textStyle = {
  fontSize: circleSize * 0.06
}

const colorNeutral = 'gray'
const colorNegative = 'red'
const colorPositive = 'lightgray'

const styles = StyleSheet.create({
  neutralCircle: {
    ...circleStyle,
    borderColor: colorNeutral,
  },

  positiveCircle: {
    ...circleStyle,
    borderColor: colorPositive
  },

  negativeCircle: {
    ...circleStyle,
    borderColor: colorNegative
  },

  textNeutral: {
    ...textStyle,
    color: colorNeutral,
  },

  textPositive: {
    ...textStyle,
    color: colorPositive
  },

  textNegative: {
    ...textStyle,
    color: colorNegative
  },

  textTotal: {
    color: '#FFF',
    fontSize: circleSize * 0.3,
  },
})

export function NeutralCircle({ children }) {
  return <View style={styles.neutralCircle}>
    {children}
  </View>
}

export function NegativeCircle({ children }) {
  return <View style={styles.negativeCircle}>
    {children}
  </View>
}

export function PositiveCircle({ children }) {
  return <View style={styles.positiveCircle}>
    {children}
  </View>
}

export function StyledTotal({ total }) {
  return <Text style={styles.textTotal}>
    {total}
  </Text>
}

export function NeutralText({ children }) {
  return <Text style={styles.textNeutral}>{children}</Text>
}

export function PositiveText({ children }) {
  return <Text style={styles.textPositive}>{children}</Text>
}

export function NegativeText({ children }) {
  return <Text style={styles.textNegative}>{children}</Text>
}