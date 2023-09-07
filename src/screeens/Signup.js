import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, createContext, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../database/Firebasedb";
import styles from "../StylesScreen/Stylestranqui";

import tranqui from "../../assets/images/tranqui_w.png";

export default function Signup() {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const onHanddlenSignup = () => {
    if (email !== "" && Password !== "") {
      createUserWithEmailAndPassword(auth, email, Password)
        .then(() => console.log("entrar"))
        .catch((err) => console.log("error"));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInicio}>
        <Image source={tranqui} style={styles.imgtranqui} />
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.titleArticule}>Ingresa tu Usuario</Text>
        <TextInput
          placeholder="Marco Antonio"
          style={styles.inputsI}
          onChangeText={(Text) => setemail(Text)}
          value={email}
        />

        <Text style={styles.titleArticule}>Contraseña</Text>
        <TextInput
          placeholder="tranqui12345"
          secureTextEntry
          style={styles.inputsI}
          value={Password}
          onChangeText={(Text) => setPassword(Text)}
        />
        <View style={styles.containerPago}>
          <TouchableOpacity style={styles.bottonS} onPress={onHanddlenSignup}>
            <Text style={styles.litle}>crear</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerPago}>
          <TouchableOpacity
            style={styles.bottonS}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.litle}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
