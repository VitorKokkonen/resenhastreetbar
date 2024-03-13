import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Wallet from '../pages/wallet';
import { NavigationContainer } from '@react-navigation/native';

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
                            backgroundColor: 'yellow',
                            height: 140,
                            borderBottomLeftRadius: 28,
                            borderBottomRightRadius: 28,
                        }
                    }}
                />
                <Screen
                    name='Carteira'
                    component={Wallet}
                    options={{
                        headerStyle: {
                            backgroundColor: 'yellow',
                            height: 140,
                            borderBottomLeftRadius: 22,
                            borderBottomRightRadius: 22
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}
export default AppRoutes