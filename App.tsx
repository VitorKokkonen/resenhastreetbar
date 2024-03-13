import React from 'react';
import { View } from 'react-native';
import AppRoutes from './src/routes/approutes';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <AppRoutes />
    </View>
  )
}
export default App