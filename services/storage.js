import AsyncStorage from '@react-native-community/async-storage';
import { storageKey } from './constant'
import { now } from './utils'

const storageService = {
  /** SET */
  async addExpense(value, description) {
    if (value > 0) {
      return this.addPartnerExpense(value, description)
    }

    return this.addSelfExpense(-value, description)
  },
  
  async addPartnerExpense(value, description = '') {
    const { partnerExpenses } = await this.getExpenses()
    const newExpenses = partnerExpenses.concat(
      [{
        value, description, timestamp: now()
      }]
    )

    return this.setExpenses(storageKey.partnerExpenses, newExpenses)
  },

  async addSelfExpense(value, description = '') {
    const { selfExpenses } = await this.getExpenses()
    const newExpenses = selfExpenses.concat(
      [{
        value, description, timestamp: now()
      }]
    )
    
    return this.setExpenses(storageKey.selfExpenses, newExpenses)
  },

  async setExpenses(key, expenses) {
    const formattedExpenses = this.formatExpenses(expenses)

    try {
      await AsyncStorage.setItem(key, formattedExpenses)
    } catch(e) {
      alert('Error updating expenses ' + e)
    }

    return true
  },

  async resetExpenses() {
    try {
      await AsyncStorage.setItem(storageKey.partnerExpenses, [])
      await AsyncStorage.setItem(storageKey.selfExpenses, [])
    } catch(e) {
      alert('Error updating expenses ' + e)
    }

    return true
  },

  formatExpenses(expenses) {
    return expenses.map(({ value, description, date }) => 
      `${value},${description},${+date}`
    ).join(';')
  },

  /** GET */
  async getExpenses() {
    const partnerExpenses = await this.getExpense(storageKey.partnerExpenses)
    const selfExpenses = await this.getExpense(storageKey.selfExpenses)

    return { partnerExpenses, selfExpenses }
  },

  async getExpense(key) {
    const expenseString = await AsyncStorage.getItem(key)
    if (!expenseString) {
      return []
    }

    const expense = this.parseExpense(expenseString)

    return expense
  },

  parseExpense(stored) {
    return stored.split(';').map(expense => {
      const [value, description, timestamp] = expense.split(',') 
      return {
        value: +value,
        description,
        date: new Date(+timestamp),
      }
    })
  },
}

export { storageService }