import React, { useState } from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const ModalDrink = ({ modalVisible, closeModal }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState('Cachaça');

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const selectOption = (option) => {
        setSelectedOption(option);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image
                        source={require('../../../assets/caipa.png')}
                        style={styles.modalImage}
                    />
                    <View style={styles.optionContainer}>
                        <TouchableOpacity
                            style={[styles.optionButton, selectedOption === 'Cachaça' && styles.selectedOption]}
                            onPress={() => selectOption('Cachaça')}
                        >
                            <Text style={styles.optionText}>Cachaça</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.optionButton, selectedOption === 'Vodka' && styles.selectedOption]}
                            onPress={() => selectOption('Vodka')}
                        >
                            <Text style={styles.optionText}>Vodka</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.button} onPress={decrementQuantity}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity style={styles.button} onPress={incrementQuantity}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={closeModal}>
                        <Text style={styles.addButtonText}>Adicionar a Carteira</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                        <Text style={styles.closeButtonText}>Close Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 300,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    optionContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    selectedOption: {
        backgroundColor: "#2196F3",
    },
    optionText: {
        color: "white",
        fontWeight: "bold",
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 20,
    },
    addButton: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
    },
    closeButton: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "black",
        fontWeight: "bold",
    }
});

export default ModalDrink;
