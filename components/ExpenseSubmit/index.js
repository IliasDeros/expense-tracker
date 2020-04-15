import React from 'react'
import { Button } from 'react-native'
import { Container } from './styles'

export function ExpenseSubmit({ submitPartner, submitSelf }) {
  return (
    <Container>
      <Button 
        title="Submit Partner"
        onPress={submitPartner}
      />
      <Button 
        title="Submit Self"
        onPress={submitSelf}
      />
    </Container>
  )
}