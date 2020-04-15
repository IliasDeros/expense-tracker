import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { storageService } from './services/storage'
import { Loading, TotalContainer } from './components'

export default function App() {
  const [partnerExpenses, setPartnerExpenses] = useState(null)
  const [selfExpenses, setSelfExpenses] = useState(null)
  const loading = partnerExpenses === selfExpenses  === null

  // Initialize data
  useEffect(() => {
    
  }, [])

  return (
    <View>      
      {loading || <TotalContainer />}
      {loading && <Loading />}
    </View>
  );
}

