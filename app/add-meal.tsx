import React,{useState} from "react";
import {View,TextInput,Text,Button,Alert,Vibration} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Add_meal = () => {
    const[title,setTitle] = useState("");
    const[mealtype,setMealtype] = useState("breakfast");
    const[calories,setCalories] = useState("");
    const[date] = useState(new Date().toISOString()); 

    const handleSave = () => {
        const meal = {
            id: Date.now().toString(),
            title,
            mealtype,
            date,
            calories: calories? parseInt(calories) : null,
            image: null
        };
        console.log("Saved meal:", meal)
        Vibration.vibrate(100);
        Alert.alert("Meal Saved", `You have added ${meal.title} to your meal log.`);
        setTitle("");
        setMealtype("breakfast");
        setCalories("");
    };
    return(
        <SafeAreaView>
            
        </SafeAreaView>
    );
};

export default Add_meal;