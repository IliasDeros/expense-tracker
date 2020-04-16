import React from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'
import { HistoryItem } from './HistoryItem'
import { NoExpenses } from './NoExpenses'

export function History({ expenses, touchableProps }) {
  if (expenses.length === 0) {
    return <NoExpenses />
  }
  
  return <Container>
    <FlatList 
      data={expenses}
      renderItem={({ item }) => <HistoryItem expense={item} touchableProps={touchableProps} />}
      keyExtractor={item => `${+item.date}`}
    />
  </Container>
}