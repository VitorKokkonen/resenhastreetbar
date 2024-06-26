import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface WalletProps {
  items: Array<{ drink: string, quantity: number, preco: number }>;
}

const Wallet: React.FC<WalletProps> = ({ items }) => {
  const totalAmount = items.reduce((total, item) => total + (item.quantity * item.preco), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wallet</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>
            {item.drink} - Quantidade: {item.quantity} - Preço: R${(item.quantity * item.preco).toFixed(2)}
          </Text>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R${totalAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 5,
  },
  itemText: {
    fontSize: 18,
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Wallet;
