import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { colors } from '../../App.styles'

const expense = {
  flexDirection: 'row',
  minHeight: 20,
}

const itemContainer = {
  padding: 16,
}

export const spaceUnderCircle = 46

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderTopWidth: 1,
    marginTop: spaceUnderCircle,
    flex: 1,
  },

  dateContainer: {
    ...itemContainer,
    flexBasis: 120
  },

  descriptionContainer: {
    ...itemContainer,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  valueContainer: {
    ...itemContainer,
    flexBasis: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  itemText: {
    color: '#fff',
  },

  selfExpense: {
    ...expense,
    backgroundColor: colors.selfGreen,
  },

  partnerExpense: {
    ...expense,
    backgroundColor: colors.partnerRed,
  },

  noExpensesContainer: {
    marginTop: spaceUnderCircle
  },

  noExpensesText: {
    color: 'gray'
  }
})

export const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

export const ItemDate = ({ children }) => (
  <View style={styles.dateContainer}>{children}</View>
)

export const ItemDescription = ({ children }) => (
  <View style={styles.descriptionContainer}>{children}</View>
)

export const ItemValue = ({ children }) => (
  <View style={styles.valueContainer}>{children}</View>
)

export const SelfExpense = ({ children, item, touchableProps = {} }) => (
  <TouchableOpacity 
    onLongPress={() => touchableProps.onLongPress && touchableProps.onLongPress(item) }
    style={styles.selfExpense}
  >{children}</TouchableOpacity>
)

export const PartnerExpense = ({ children, ...props }) => (
  <TouchableOpacity {...props} style={styles.partnerExpense}>{children}</TouchableOpacity>
)

export const NoExpensesContainer = ({ children }) => (
  <View style={styles.noExpensesContainer}>
    {children}
  </View>
)

export const NoexpensesText = ({ children }) => (
  <Text style={styles.noExpensesText}>{children}</Text>
)