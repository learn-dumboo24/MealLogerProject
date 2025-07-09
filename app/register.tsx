import React from "react";
import { registerUser } from '../utils/firebaseAuth';
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {View,TextInput,Button,Text} from "react-native";

const Register = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    
    const handleRegister = async () => {
        try {
            await registerUser(email, password);
            console.log("Registered!");
        } catch (err:any) {
            console.error("Register error:", err);
            setError(err.message);
        }
    };
    return(
        <SafeAreaView style = {{flex:1,padding:20,justifyContent:"center"}}>
            <View>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style = {{ borderBottomWidth:1,marginBottom:10 }}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    secureTextEntry
                    style = {{ borderBottomWidth:1,marginBottom:10 }}
                />
                {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
                <Button title = "Register" onPress={handleRegister} />
            </View>
        </SafeAreaView>
    );
};

export default Register;
