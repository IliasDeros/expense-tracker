import React from 'react'
import { View, TextInput } from 'react-native'
import { inputSize, styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faDollarSign } from '@fortawesome/free-solid-svg-icons'

export function ExpenseForm({
  value,
  description,
  setValue,
  setDescription
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon style={styles.icon} icon={faDollarSign} size={inputSize} />
        <TextInput 
          value={value}
          style={styles.input}
          placeholder="0.00"
          placeholderTextColor="gray"
          onChangeText={setValue}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.iconContainer}>
        <FontAwesomeIcon style={styles.icon} icon={faPen} size={inputSize} />
        <TextInput 
          value={description}
          style={styles.input}
          placeholder="Expense Description"
          placeholderTextColor="gray"
          onChangeText={setDescription}
        />
      </View>
    </View>
  )
}