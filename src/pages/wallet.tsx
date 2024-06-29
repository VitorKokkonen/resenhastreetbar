import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface WalletProps {
  items: Array<{ drink: string; quantity: number; preco: number }>;
  onRemoveItem: (index: number) => void;
}

const Wallet: React.FC<WalletProps> = ({ items, onRemoveItem }) => {
  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * item.preco,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carteira</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onRemoveItem(index)}
          >
            <FontAwesomeIcon icon={faTimes} size={16} color="red" />
          </TouchableOpacity>
          <Text style={styles.itemText}>
            {item.drink} - Quantidade: {item.quantity} - Preço: R${" "}
            {(item.quantity * item.preco).toFixed(2)}
          </Text>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R${totalAmount.toFixed(2)}</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Fechar Caixa</Text>
        </TouchableOpacity>
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
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#4CAF50", // Esverdeado
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Wallet;
