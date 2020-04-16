import React from 'react'
import { 
  NeutralText, 
  NeutralCircle, 
  PositiveCircle, 
  NegativeCircle, 
  NegativeText, 
  PositiveText 
} from './styles'

const neutralTotal = "You guys are clear!"
const positiveTotal = "Your partner owes you:"
const negativeTotal = "You owe your partner:"

export function TotalCircle({ total, touchableProps }) {
  let Circle = NeutralCircle
  let TextComponent = NeutralText
  
  let text = neutralTotal

  if (total < 0) {
    Circle = NegativeCircle
    TextComponent = NegativeText
    text = negativeTotal
  }

  if (total > 0) {
    Circle = PositiveCircle
    TextComponent = PositiveText
    text = positiveTotal
  }
  
  return <Circle touchableProps={touchableProps}>
    <TextComponent>{text}</TextComponent>
    <TextComponent>$CAD</TextComponent>
  </Circle>
}