import React from "react";
import { View, Text, StyleSheet } from "react-native";


const User = ({ userInfo }) => {
    const { email, userName } = userInfo.data;

    return (
        <View style={styles.container}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.email}>Email: {email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 8,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom:10
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
});

export default User