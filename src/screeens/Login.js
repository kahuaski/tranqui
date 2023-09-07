import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/Firebasedb";
import styles from "../StylesScreen/Stylestranqui";
import { useNavigation } from "@react-navigation/native";
import tranqui from "../../assets/images/tranqui_w.png";
import Signup from "./Signup";

export default function Login(Signup) {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const onHanddlenLogin = () => {
    if (email !== "" && Password !== "") {
      signInWithEmailAndPassword(auth, email, Password)
        .then(() => console.log("entrar"))
        .catch((err) => console.log("error"));
    }
  };

  const SignupHandle = () => {
    navigation.navigate("Signup");
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
        />

        <Text style={styles.titleArticule}>Contraseña</Text>
        <TextInput
          placeholder="tranqui12345"
          secureTextEntry
          style={styles.inputsI}
          onChangeText={(Text) => setPassword(Text)}
        />
        <View style={styles.containerPago}>
          <TouchableOpacity style={styles.bottonS} onPress={onHanddlenLogin}>
            <Text style={styles.litle}>Ingresar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerPago}>
          <TouchableOpacity style={styles.bottonS} onPress={SignupHandle}>
            <Text style={styles.litle}>Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
