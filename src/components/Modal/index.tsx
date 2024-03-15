import React from "react";
import { Modal, StyleSheet, View, Text, Button, Image } from "react-native";

const ModalDrink = ({ modalVisible, closeModal }: any) => {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image
                        source={require('../../../assets/caipa.png')}
                        style={styles.modalImage}
                    />
                    <Button title="Close Modal" onPress={closeModal} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        width: '80%',
        maxHeight: '80%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    }
});


export default ModalDrink