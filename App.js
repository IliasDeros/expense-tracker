import React, { useState, useEffect } from 'react';
import { AppContainer } from './App.styles'
import { expenseService } from './services/expense'
import { 
  ExpenseForm, 
  ExpenseSubmit,
  Loading, 
  ResetButton, 
  TotalContainer 
} from './components'

export default function App() {
  const [partnerExpenses, setPartnerExpenses] = useState(null)
  const [selfExpenses, setSelfExpenses] = useState(null)
  const [formValue, setFormValue] = useState()
  const [formDescription, setFormDescription] = useState()
  const loading = !partnerExpenses || !selfExpenses

  // Initialize data
  useEffect(loadExpenses, [])

  function loadExpenses() {
    expenseService.getExpenses().then(({ partnerExpenses, selfExpenses }) => {
      setPartnerExpenses(partnerExpenses)
      setSelfExpenses(selfExpenses)
    })
  }

  function resetExpenses() {
    expenseService.resetExpenses().then(loadExpenses)
  }

  function addPartnerExpense() {
    expenseService
      .addPartnerExpense(formValue, formDescription)
      .then(loadExpenses)
  }

  function addSelfExpense() {
    expenseService
      .addSelfExpense(formValue, formDescription)
      .then(loadExpenses)
  }

  return (
    <AppContainer>      
      {loading || <TotalContainer 
        partnerExpenses={partnerExpenses}
        selfExpenses={selfExpenses}
      />}

      {loading && <Loading />}

      <ExpenseForm 
        value={`${formValue}`}
        description={formDescription}
        setValue={setFormValue}
        setDescription={setFormDescription}
      />

      <ExpenseSubmit 
        submitPartner={addPartnerExpense}
        submitSelf={addSelfExpense}
      />

      <ResetButton reset={resetExpenses} />
    </AppContainer>
  );
}

