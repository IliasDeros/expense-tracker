import React, { useState, useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
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
  const [formValue, setFormValue] = useState('')
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
    if (isNaN(formValue)) { return }    

    expenseService
      .addPartnerExpense(+formValue, formDescription)
      .then(loadExpenses)

    resetForm()
  }

  function addSelfExpense() {
    if (isNaN(formValue)) { return }      

    expenseService
      .addSelfExpense(+formValue, formDescription)
      .then(loadExpenses)

    resetForm()
  }

  function resetForm() {
    setFormValue(0)
    setFormDescription('')
  }
  
  if (loading) {
    return (
      <AppContainer>
         <Loading />
      </AppContainer>
    )
  }

  return (
    <AppContainer>
      <ExpenseForm 
        value={formValue}
        description={formDescription}
        setValue={setFormValue}
        setDescription={setFormDescription}
      />

      <ExpenseSubmit 
        submitPartner={addPartnerExpense}
        submitSelf={addSelfExpense}
      />  

      <TotalContainer 
        partnerExpenses={partnerExpenses}
        selfExpenses={selfExpenses}
      />

      <ResetButton reset={resetExpenses} />
    </AppContainer>
  );
}

