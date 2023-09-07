import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import React, { useState, createContext, useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { auth } from "./src/database/Firebasedb";
import Login from "./src/screeens/Login";
import Signup from "./src/screeens/Signup";
import styles from "./src/StylesScreen/Stylestranqui";
import Home from "./src/screeens/Home";
import conexionProducts from "./src/database/Conection_api";
import { Title } from "react-native-paper";

const Stack = createNativeStackNavigator();
const AuthenticatedUsercontext = createContext();
const AuthenticadorUserProvieder = ({ children }) => {
  const [user, setuser] = useState(null);
  return (
    <AuthenticatedUsercontext.Provider value={{ user, setuser }}>
      {children}
    </AuthenticatedUsercontext.Provider>
  );
};

function Tranqui() {
  return (
    <Stack.Navigator screenOptions={Home}>
      <Stack.Screen name="Tranqui Server" component={Home} options={{ Title:'Tranquilo', headerTitleAlign:"center"} } />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, Login }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

function NavigationRoot() {
  const { user, setuser } = useContext(AuthenticatedUsercontext);
  const { loading, setloading } = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async function (authenticatedUser) {

        authenticatedUser ? setuser(authenticatedUser) : setuser(null);
        setloading(false);
      }
    );
    return () => unsubscribe();
  }, [user]);
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <Tranqui /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
 
  return (
    <AuthenticadorUserProvieder>
      <NavigationRoot />
    </AuthenticadorUserProvieder>
  );
}
