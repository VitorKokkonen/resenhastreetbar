import React from "react";
import { View, StyleSheet } from "react-native";
import DrinkCard from "../components/DrinkCard";

const caipaImage = require('./../../assets/caipa.png');

interface HomeProps {
  onAddToWallet: (drink: string, quantity: number, preco: number) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToWallet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <DrinkCard
          nome="Caipa"
          image={caipaImage}
          preco={10}
          onAddToWallet={onAddToWallet}
        />
        <DrinkCard
          nome="Caipa"
          image={caipaImage}
          preco={10}
          onAddToWallet={onAddToWallet}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Home;
