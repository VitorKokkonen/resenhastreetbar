import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Wallet from '../pages/wallet';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name='Cardápio'
                    component={Home}
                    options={{
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
                    options={({ navigation }) => ({
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