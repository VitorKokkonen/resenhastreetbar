import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Wallet from '../pages/wallet';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name='Cardápio'
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
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
                />
                <Screen
                    name='Carteira'
                    component={Wallet}
                    options={() => ({
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesomeIcon icon={faWallet} color={color} size={18} />
                        ),
                        tabBarBadge: 3,
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
                    })}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes;