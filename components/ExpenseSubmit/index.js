import React from 'react'
import { Button } from 'react-native'
import { Container } from './styles'

export function ExpenseSubmit({ submitPartner, submitSelf }) {
  return (
    <Container>
      <Button 
        title="You paid"
        onPress={submitSelf}
      />
      <Button 
        title="They paid"
        onPress={submitPartner}
      />
    </Container>
  )
}