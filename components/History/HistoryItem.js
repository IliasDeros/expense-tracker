import React from 'react'
import { Text, View } from 'react-native'
import { ItemDate, ItemDescription, ItemValue, styles, SelfExpense, PartnerExpense } from './styles'
import { formatDate } from './utils'
import { expenseType } from '../constant'

function componentForType({ type }) {
  let Component

  switch(type) {
    case expenseType.self:
      Component = SelfExpense
      break
    default:
      Component = PartnerExpense
  }

  return Component
}

export function HistoryItem({ expense }) {
  const ItemContainer = componentForType(expense)

  const { 
    date,
    description = '-',
    value
  } = expense
  return (
    <ItemContainer>
      <ItemDate>
        <Text style={styles.itemText}>{formatDate(date)}</Text>
      </ItemDate>

      <ItemDescription>
        <Text style={styles.itemText}>
          {description}
        </Text>
      </ItemDescription>

      <ItemValue>
        <Text style={styles.itemText}>{value.toFixed(2)}$</Text>
      </ItemValue>
    </ItemContainer>
  )
}