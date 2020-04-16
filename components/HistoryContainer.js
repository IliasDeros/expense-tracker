import React from 'react'
import { History } from './History'
import { expenseType } from './constant'

function mergeExpenses(partner, self) {
  return partner
    .map(expense => ({ ...expense, type: expenseType.partner }))
    .concat(self.map(expense => ({ ...expense, type: expenseType.self })))
}

const sortDateDesc = (a, b) => b.date - a.date

export function HistoryContainer({ partnerExpenses, selfExpenses }) {
  // Merge expenses in 1 array, denoting partner expenses
  const mergedExpenses = mergeExpenses(partnerExpenses, selfExpenses)

  // sort expenses by date
  const sortedExpenses = mergedExpenses.sort(sortDateDesc)

  return <History expenses={sortedExpenses} />
}