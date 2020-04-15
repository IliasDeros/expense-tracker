import React from 'react'
import { 
  StyledTotal, 
  NeutralText, 
  NeutralCircle, 
  PositiveCircle, 
  NegativeCircle, 
  NegativeText, 
  PositiveText } from './styles'

const neutralTotal = "You guys are clear"
const positiveTotal = "Your partner owes you:"
const negativeTotal = "You owe your partner"

export function Total({ total }) {
  let Circle = NeutralCircle
  let TextComponent = NeutralText
  let display = total
  let text = neutralTotal

  if (total < 0) {
    Circle = NegativeCircle
    TextComponent = NegativeText
    text = negativeTotal
    display = -total
  }

  if (total > 0) {
    Circle = PositiveCircle
    TextComponent = PositiveText
    text = positiveTotal
  }
  
  return <Circle>
    <TextComponent>{text}</TextComponent>
    <StyledTotal total={display}/>
    <TextComponent>$CAD</TextComponent>
  </Circle>
}