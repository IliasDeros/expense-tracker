import * as SecureStore from 'expo-secure-store';
import { storageKey } from './constant'
import { now } from './utils'

const expenseService = {
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
        value, description, date: now()
      }]
    )

    return this.setExpenses(storageKey.partnerExpenses, newExpenses)
  },

  async addSelfExpense(value, description = '') {
    const { selfExpenses } = await this.getExpenses()
    const newExpenses = selfExpenses.concat(
      [{
        value, description, date: now()
      }]
    )
    
    return this.setExpenses(storageKey.selfExpenses, newExpenses)
  },

  async setExpenses(key, expenses) {
    const formattedExpenses = this.formatExpenses(expenses)

    try {
      await SecureStore.setItemAsync(key, formattedExpenses)
    } catch(e) {
      alert('Error updating expenses ' + e)
    }

    return true
  },

  async resetExpenses() {
    try {
      await SecureStore.setItemAsync(storageKey.partnerExpenses, '')
      await SecureStore.setItemAsync(storageKey.selfExpenses, '')
    } catch(e) {
      alert('Error updating expenses ' + e)
    }

    return true
  },

  /** GET */
  async getExpenses() {
    const partnerExpenses = await this.getExpense(storageKey.partnerExpenses)
    const selfExpenses = await this.getExpense(storageKey.selfExpenses)

    return { partnerExpenses, selfExpenses }
  },

  async getExpense(key) {
    const expenseString = await SecureStore.getItemAsync(key)
    if (!expenseString) {
      return []
    }

    const expense = this.parseExpense(expenseString)

    return expense
  },

  /** Serialization */
  formatExpenses(expenses) {
    return expenses.map(({ value, description, date }) => 
      `${value.toFixed(2)},${description},${+date}`
    ).join(';')
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

export { expenseService }