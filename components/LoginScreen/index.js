import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';


export default function LoginScreen({ navigation }){

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    
    
    async function fetchlogin(){
         
        try{

            let retorno = await fetch('http://10.0.2.2:5000/users/login', {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin': '*'
             },
             body: JSON.stringify({ login: login, password: senha})
         });

         let json = await retorno.json();

         if(json.type){
             navigation.navigate(json.type);
         }else{
             console.log("Não autorizado")
         }

        }catch (error){
            console.error(error);
        }
        

    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Freelaaah</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTExtColor="#003f5c"
                    onChangeText={text => setLogin(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password..."
                    placeholderTExtColor="#003f5c"
                    onChangeText={text => setSenha(text)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Esqueceu a sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    fetchlogin();
                }}            
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#18C29C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "white",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#107760",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: '80%',
        backgroundColor: "#DA39E6",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 48,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});