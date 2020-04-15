import React from 'react'
import { StyledButton, Container } from './styles'

export function ExpenseSubmit({ submitPartner, submitSelf }) {
  return (
    <Container>
      <StyledButton 
        title="You paid"
        onPress={submitSelf}
      />
      <StyledButton 
        title="They paid"
        onPress={submitPartner}
      />
    </Container>
  )
}