import React from 'react';
import { Image } from 'react-native';
import {
    createBottomTabNavigator,
    NavigationContainer,
    Home,
    Wallet,
    FontAwesomeIcon,
    faMartiniGlass,
    faWallet
} from '../../index';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name='Cardápio'
                    component={Home}
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
                />
                <Screen
                    name='Carteira'
                    component={Wallet}
                    options={() => ({
                        tabBarIcon: ({ color }) => (
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