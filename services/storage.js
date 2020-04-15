import AsyncStorage from '@react-native-community/async-storage';
import { storageKey } from './constant'
import { now } from './utils'

const storageService = {
  async addExpense(value, description) {
    if (value > 0) {
      return this.addPartnerExpense(value, description)
    }

    return this.addSelfExpense(-value, description)
  },
  
  async addPartnerExpense(value, description = '') {
    const { partnerExpenses } = await this.getExpenses()
    const newExpenses = partnerExpenses.concat(
      [[value, description, now()]]
    )

    try {
      await AsyncStorage.setItem(storageKey.partnerExpenses, newExpenses)
    } catch(e) {
      alert('Error updating expenses ' + e)
    }

    return true
  },

  async addSelfExpense(value, description = '') {
    const { selfExpenses } = await this.getExpenses()
    const newExpenses = selfExpenses.concat(
      [[value, description, now()]]
    )
    
    try {
      await AsyncStorage.setItem(storageKey.selfExpenses, newExpenses)
    } catch(e) {
      alert('Error updating expenses ' + e)
    }

    return true
  },

  async getExpenses() {
    const partnerExpenses = await AsyncStorage.getItem(storageKey.partnerExpenses) || []
    const selfExpenses = await AsyncStorage.getItem(storageKey.selfExpenses) || []

    return { partnerExpenses, selfExpenses }
  },
}

export { storageService }