import React, { useState, useEffect } from 'react';
import { AppContainer } from './App.styles'
import { storageService } from './services/storage'
import { Loading, TotalContainer } from './components'

export default function App() {
  const [partnerExpenses, setPartnerExpenses] = useState(null)
  const [selfExpenses, setSelfExpenses] = useState(null)
  const loading = !partnerExpenses || !selfExpenses

  // Initialize data
  useEffect(() => {
    storageService.getExpenses().then(({ partnerExpenses, selfExpenses }) => {
      setPartnerExpenses(partnerExpenses)
      setSelfExpenses(selfExpenses)
    })
  }, [])

  return (
    <AppContainer>      
      {loading || <TotalContainer 
        partnerExpenses={partnerExpenses}
        selfExpenses={selfExpenses}
      />}
      {loading && <Loading />}
    </AppContainer>
  );
}

