import React from 'react'
import { Alert } from 'react-native'
import { StyledButton } from './styles'

function promptReset(onPress) {
  Alert.alert(
    'Clear expenses',
    'Reset all expenses?',
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Confirm reset', style: 'destructive', onPress }
    ]
  )
}

export function ResetButton({ reset }) {
  return <StyledButton 
    title="Reset"
    onPress={() => promptReset(reset)}
  />
}