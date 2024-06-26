import React, { useState } from 'react';
import { View } from 'react-native';
import AppRoutes from './src/routes/approutes';

const App = () => {
  const [walletItems, setWalletItems] = useState<Array<{ drink: string, quantity: number, preco: number }>>([]);

  const handleAddToWallet = (drink: string, quantity: number, preco: number) => {
    setWalletItems([...walletItems, { drink, quantity, preco }]);
  };

  return (
    <View style={{ flex: 1 }}>
      <AppRoutes walletItems={walletItems} onAddToWallet={handleAddToWallet} />
    </View>
  )
}

export default App;
