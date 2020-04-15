import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from './styles'

export function ExpenseForm({
  value,
  description,
  setValue,
  setDescription
}) {
  return (
    <View>
      <TextInput 
        value={value}
        style={styles.input}
        placeholder="0"
        onChangeText={text => setValue(+text)}
        keyboardType="numeric"
      />

      <TextInput 
        value={description}
        style={styles.input}
        placeholder="Expense Description"
        onChangeText={setDescription}
      />
    </View>
  )
}