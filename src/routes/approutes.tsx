import React, { useState } from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/home";
import Wallet from "../pages/wallet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMartiniGlass, faWallet } from "@fortawesome/free-solid-svg-icons";

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
  const [items, setItems] = useState<Array<{ drink: string; quantity: number; preco: number }>>([]);

  const handleAddToWallet = (drink: string, quantity: number, preco: number) => {
    const newItem = { drink, quantity, preco };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Cardápio"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faMartiniGlass} color={color} size={18} />
            ),
            tabBarActiveTintColor: "#F6CE21",
            headerStyle: {
              backgroundColor: "#F6CE21",
              height: 140,
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
            },
            headerLeft: () => (
              <Image
                source={require("./../../assets/resenha.png")}
                style={{
                  width: 80,
                  height: 80,
                  marginLeft: 10,
                  backgroundColor: "white",
                }}
              />
            ),
          }}
        >
          {(props) => <Home {...props} onAddToWallet={handleAddToWallet} />}
        </Screen>
        <Screen
          name="Carteira"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faWallet} color={color} size={18} />
            ),
            tabBarBadge: items.length,
            tabBarActiveTintColor: "#F6CE21",
            headerStyle: {
              backgroundColor: "#F6CE21",
              height: 140,
              borderBottomLeftRadius: 22,
              borderBottomRightRadius: 22,
            },
            headerLeft: () => (
              <Image
                source={require("./../../assets/resenha.png")}
                style={{
                  width: 80,
                  height: 80,
                  marginLeft: 10,
                  backgroundColor: "white",
                }}
              />
            ),
          }}
        >
          {(props) => (
            <Wallet
              {...props}
              items={items}
              onRemoveItem={handleRemoveItem}
              onClearItems={handleClearItems} // Passando a função handleClearItems
            />
          )}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
