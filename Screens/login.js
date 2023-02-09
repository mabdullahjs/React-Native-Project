import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView style={styles.view}>
            <View style={{ alignItems: "center", paddingBottom: 10 }}>
                <Text style={styles.text}>Login Form</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
            />
            <View style={{alignItems:"center" , paddingTop:20}}>
            <TouchableOpacity style={{ backgroundColor: "black", width: "40%", padding: 8 , borderRadius:20 }}>
                <Text style={{ fontSize: 20, textAlign: "center" }}>Submit</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "black"
    },
    view: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "black",
        fontSize: 30,
    }

});

export default Login;