import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import DrinkCard from "../components/DrinkCard";

const caipaImage = require('./../../assets/caipa.png');

const Home = () => {
    return (
        <View style={styles.rowContainer}>
            <DrinkCard
                nome="Caipa"
                image={caipaImage}
            />

            <DrinkCard
                nome="Caipa"
                image={caipaImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        
    },
})

export default Home;