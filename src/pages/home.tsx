import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import DrinkCard from "../components/DrinkCard";
// import { fetchCardapio } from "../services/produtosServices";

const caipaImage = require('./../../assets/caipa.png');
const whiskyImage = require('./../../assets/whisky.png');

interface HomeProps {
  onAddToWallet: (drink: string, quantity: number, preco: number) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToWallet }) => {
  const [cardapio, setCardapio] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const produtosData = await fetchCardapio()
  //       setCardapio(produtosData)

  //     } catch (error) {
  //       console.error("Erro ao uscar os produtos", error)
  //     }
  //   }
  //   fetchData()
  // }, [])

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
          nome="Caipa de Vinho"
          image={caipaImage}
          preco={10}
          onAddToWallet={onAddToWallet}
        />
      </View>

      <View style={styles.rowContainer}>
        <DrinkCard
          nome="Copo de Whisky"
          image={whiskyImage}
          preco={17}
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
