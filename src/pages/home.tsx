import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View>
            <View style={styles.drinkContainer}>
                <Image
                    style={[styles.image, styles.shadowProp]}
                    source={require('./../../assets/caipa.png')}
                />
                <Text style={[styles.shadowProp]}>Caipa</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drinkContainer: {
        width: '30%',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 150,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3, 
    },
});

export default Home;
