import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from "react-native";
import ModalDrink from "../Modal";
const DrinkCard = (props: any) => {
    const { nome, image } = props;
    const [modalVisible, setModalVisible] = useState(false);

    const handleCardPress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    

    return (
        <View>
            <TouchableOpacity onPress={handleCardPress}>
                <View style={styles.drinkContainer}>
                    <Image
                        style={[styles.image, styles.shadowProp]}
                        source={image}
                    />
                    <Text style={[styles.shadowProp]}>{nome}</Text>
                </View>
            </TouchableOpacity>
            <ModalDrink modalVisible={modalVisible} closeModal={closeModal} />
        </View>
    );
}

export default DrinkCard

const styles = StyleSheet.create({
    drinkContainer: {
        margin: 30,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff', // Adicionando um backgroundColor
        borderRadius: 10, // Ajustando o borderRadius para a sombra aparecer melhor
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.9,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});
