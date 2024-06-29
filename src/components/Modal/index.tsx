import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from "react-native";

interface ModalDrinkProps {
    modalVisible: boolean;
    closeModal: () => void;
    addToWallet: (drink: string, quantity: number, preco: number) => void;
    preco: number;
    onSavePrice: (newPreco: number) => void; // Adiciona esta linha
}

const ModalDrink: React.FC<ModalDrinkProps> = ({ modalVisible, closeModal, addToWallet, preco, onSavePrice }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState('Cachaça');
    const [editablePreco, setEditablePreco] = useState(preco.toFixed(2));
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (modalVisible) {
            setQuantity(1);
            setEditablePreco(preco.toFixed(2));
        }
    }, [modalVisible, preco]);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const selectOption = (option: string) => {
        setSelectedOption(option);
    };

    const handleAddToWallet = () => {
        addToWallet(selectedOption, quantity, parseFloat(editablePreco));
    };

    const handleEditPreco = () => {
        if (isEditing) {
            onSavePrice(parseFloat(editablePreco)); // Salva o preço editado
        }
        setIsEditing(!isEditing);
    };

    const handlePrecoChange = (text: string) => {
        setEditablePreco(text);
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
                    {isEditing ? (
                        <TextInput
                            style={styles.priceInput}
                            value={editablePreco}
                            onChangeText={handlePrecoChange}
                            keyboardType="numeric"
                        />
                    ) : (
                        <Text style={styles.priceText}>Preço: R${editablePreco}</Text>
                    )}
                    <TouchableOpacity style={styles.editButton} onPress={handleEditPreco}>
                        <Text style={styles.editButtonText}>{isEditing ? "Salvar" : "Editar Preço"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButton} onPress={handleAddToWallet}>
                        <Text style={styles.addButtonText}>Adicionar à Carteira</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                        <Text style={styles.closeButtonText}>Fechar Modal</Text>
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
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    priceInput: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 5,
        width: 100,
        textAlign: "center",
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
    },
    editButton: {
        backgroundColor: "#4CAF50", // Cor esverdeada
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    editButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default ModalDrink;
