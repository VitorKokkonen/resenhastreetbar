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
                    <Button title="Adicionar a Carteira" onPress={closeModal} />
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
       height: "100%",
       alignItems: 'center'
    },
    modalImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    }
});


export default ModalDrink