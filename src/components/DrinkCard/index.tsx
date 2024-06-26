import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ModalDrink from "../Modal";

interface DrinkCardProps {
    nome: string;
    image: any; // ajuste o tipo conforme necessário
    preco: number;
    onAddToWallet: (drink: string, quantity: number, preco: number) => void;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ nome, image, preco, onAddToWallet }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleCardPress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const addToWallet = (drink: string, quantity: number, preco: number) => {
        onAddToWallet(drink, quantity, preco);
        closeModal(); // fechar o modal após adicionar à carteira
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
                    <Text style={[styles.shadowProp]}>R$ {preco.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
            <ModalDrink 
                modalVisible={modalVisible} 
                closeModal={closeModal} 
                addToWallet={addToWallet} 
                preco={preco} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    drinkContainer: {
        margin: 30,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
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
});

export default DrinkCard;
