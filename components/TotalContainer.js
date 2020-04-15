import React from 'react'
import { Total } from './Total/index'

export function TotalContainer({ partnerExpenses, selfExpenses }) {
  let total = partnerExpenses.reduce((acc, cur) => acc - cur.value, 0)
  total = selfExpenses.reduce((acc, cur) => acc + cur.value, total)

  return <Total total={total} />
}