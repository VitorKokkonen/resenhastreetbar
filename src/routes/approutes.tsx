import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/home';
import Wallet from '../pages/wallet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMartiniGlass, faWallet } from '@fortawesome/free-solid-svg-icons';

const { Navigator, Screen } = createBottomTabNavigator();

interface AppRoutesProps {
  walletItems: Array<{ drink: string, quantity: number, preco: number }>;
  onAddToWallet: (drink: string, quantity: number, preco: number) => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ walletItems, onAddToWallet }) => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='Cardápio'
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faMartiniGlass} color={color} size={18} />
            ),
            tabBarActiveTintColor: '#F6CE21',
            headerStyle: {
              backgroundColor: '#F6CE21',
              height: 140,
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
            },
            headerLeft: () => (
              <Image
                source={require('./../../assets/resenha.png')}
                style={{ width: 80, height: 80, marginLeft: 10, backgroundColor: 'white' }}
              />
            ),
          }}
        >
          {props => <Home {...props} onAddToWallet={onAddToWallet} />}
        </Screen>
        <Screen
          name='Carteira'
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faWallet} color={color} size={18} />
            ),
            tabBarBadge: walletItems.length,
            tabBarActiveTintColor: '#F6CE21',
            headerStyle: {
              backgroundColor: '#F6CE21',
              height: 140,
              borderBottomLeftRadius: 22,
              borderBottomRightRadius: 22
            },
            headerLeft: () => (
              <Image
                source={require('./../../assets/resenha.png')}
                style={{ width: 80, height: 80, marginLeft: 10, backgroundColor: 'white' }}
              />
            ),
          }}
        >
          {props => <Wallet {...props} items={walletItems} />}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
