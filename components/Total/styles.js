import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AnimatedNumber from 'react-native-animated-number'
import { colors } from '../../App.styles'

const { width, height } = Dimensions.get('window')
const circleSize = Math.min(width, height) * 0.75

const circleStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: circleSize,
  borderWidth: 10,
  width: circleSize,
  height: circleSize,
  paddingTop: circleSize * 0.2,
  paddingBottom: circleSize * 0.2,
  marginBottom: circleSize * 0.15
}

const textStyle = {
  fontSize: circleSize * 0.06
}

const colorNeutral = 'gray'
const colorNegative = colors.partnerRed
const colorPositive = colors.selfGreen

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

export function NegativeCircle({ children, touchableProps }) {
  return <TouchableOpacity style={styles.negativeCircle} {...touchableProps}>
    {children}
  </TouchableOpacity>
}

export function PositiveCircle({ children, touchableProps }) {
  return <TouchableOpacity style={styles.positiveCircle} {...touchableProps}>
    {children}
  </TouchableOpacity>
}

export function StyledTotal({ total }) {
  return <AnimatedNumber 
    formatter={value => (value / 100).toFixed(2)}
    style={styles.textTotal} 
    value={total * 100} 
  />
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