import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native"
import Login from "./login";
import Home from "./home";
import Register from "./register";
import {useAuth} from "../context/AuthContext";

export default function Index() {
  const {user,loading} = useAuth();
  return (
    <SafeAreaView style = {{flex:1}}>
      {loading? <Text>Loading...</Text> : user? <Home />: <Register />}
    </SafeAreaView>
  );
};
