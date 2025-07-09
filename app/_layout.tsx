import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar"
import {useEffect} from "react";
import {Platform} from "react-native";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  useEffect(()=>{
    if(Platform.OS==="android"){
      NavigationBar.setButtonStyleAsync("light")
    }
  },[]);
  return (
    <>
      <AuthProvider>
      <StatusBar style="dark" />
      <Slot />
    </AuthProvider>
    </>
  );
}


