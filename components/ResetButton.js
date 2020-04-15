import React from 'react'
import { Alert, Button } from 'react-native'

function promptReset(onPress) {
  onPress() // Remove for iOS
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
  return <Button 
    title="Reset"
    onPress={() => promptReset(reset)}
  />
}