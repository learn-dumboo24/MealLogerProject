import React from "react";
import { loginUser } from '../utils/firebaseAuth';
import { useState } from "react";
import { View,TextInput,Button,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[error,setError] = useState("");
    
    const handleLogin = async () => {
        try {
            await loginUser(email, password);
            console.log("Logged in!");
        } catch (err:any) {
            console.error("Login error,try again.", err);
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
                <Button title = "Login" onPress={handleLogin} />
            </View>
        </SafeAreaView>
    );
};
 
export default Login;