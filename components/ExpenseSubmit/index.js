import React from 'react'
import { StyledButton, Container } from './styles'
import { colors } from '../../App.styles'

export function ExpenseSubmit({ submitPartner, submitSelf }) {
  return (
    <Container>
      <StyledButton 
        title="You paid"
        color={colors.selfGreenBright}
        onPress={submitSelf}
      />
      <StyledButton 
        title="They paid"
        color={colors.partnerRedBright}
        onPress={submitPartner}
      />
    </Container>
  )
}