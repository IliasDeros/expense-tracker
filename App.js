import React, { useState, useEffect } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './App.styles'
import { expenseService } from './services/expense'
import { 
  ExpenseForm, 
  ExpenseSubmit,
  HistoryContainer,
  Loading, 
  ResetButton, 
  TotalContainer 
} from './components'

function promptReset(onPress) {
  Alert.alert(
    'Clear expenses',
    'Reset all expenses?',
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Confirm reset', style: 'destructive', onPress }
    ]
  )
}

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
    if (!formValue || isNaN(formValue)) { return }    

    expenseService
      .addPartnerExpense(+formValue, formDescription)
      .then(loadExpenses)

    resetForm()
  }

  function addSelfExpense() {
    if (!formValue || isNaN(formValue)) { return }      

    expenseService
      .addSelfExpense(+formValue, formDescription)
      .then(loadExpenses)

    resetForm()
  }

  function resetForm() {
    setFormValue(0)
    setFormDescription('')
    Keyboard.dismiss()
  }
  
  if (loading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
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
          touchableProps={{ 
            onPress: Keyboard.dismiss,
            onLongPress: () => promptReset(resetExpenses),
          }}
        />

        <HistoryContainer 
          partnerExpenses={partnerExpenses} 
          selfExpenses={selfExpenses} 
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

