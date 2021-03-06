import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import AnimatedNumber from 'react-native-animated-number'
import { colors } from '../../App.styles'
import { oneMillion, oneThousand } from '../constant'

const { width, height } = Dimensions.get('window')
export const circleSize = Math.min(width, height) * 0.75

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
  const valueFormatter = (value) => {
    let suffix = ''
    let display = value / 100
    
    if (display > oneMillion) {
      display /= oneMillion
      suffix = 'm'
    } else if (display > oneThousand) {
      display /= oneThousand
      suffix = 'k'
    }

    return display.toFixed(2) + suffix
  }
  return <AnimatedNumber 
    formatter={valueFormatter}
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