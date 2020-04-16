import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Container, styles } from './styles'
import { HistoryItem } from './HistoryItem'

export function History({ expenses }) {
  return <Container>
    <FlatList 
      data={expenses}
      renderItem={({ item }) => <HistoryItem expense={item} />}
      keyExtractor={item => +item.date}
    />
  </Container>
}