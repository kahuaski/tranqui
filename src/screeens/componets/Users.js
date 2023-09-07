import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal
} from "react-native";
import React from "react";
import styles from "../../StylesScreen/Stylestranqui";
import { useState } from "react";
import { database } from "../../database/Firebasedb";
import { collection, addDoc } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";

export default function Users() {
  const navigation = useNavigation();
  const [user, setuser] = useState({
    ruc: "",
    propietario: "",
    negocio: "",
    descripcion: "",
    tipo: "",
    direccion: "",
  });
  console.log(user);
  const OnsendHandle = async () => {
    await addDoc(collection(database, "users"), user);
    navigation.goBack();
  };

  const resultPicker = async () => {
    openImagePicker();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    let url = result.assets[0].uri;
    setimages(url);
    const res = await uploadFile(url);
    let resString = res.toString();
    setUrls(resString);

    console.log(resString);
  };

  return (
    <ScrollView>
    <Modal name="mapa" >
    
    
    </Modal>
    
      <View style={styles.container}>
      
      <View>
      <TouchableOpacity onPress={mapa}>
      <Text>abrir</Text>
      </TouchableOpacity>
      </View>
        <View>
          <Image
            style={styles.imgMenu}
            source={{
              uri: "https://i.pinimg.com/564x/05/4c/40/054c40c0bffcd101509c155930f27b40.jpg",
            }}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="Ruc"
            style={styles.inputsI}
            onChangeText={(text) => setuser({ ...user, ruc: text })}
          />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setuser({ ...user, propietario: text })}
            placeholder="Nombre del propietario"
            style={styles.inputsI}
          />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setuser({ ...user, negocio: text })}
            placeholder="Negocio"
            style={styles.inputsI}
          />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setuser({ ...user, descripcion: text })}
            placeholder="Descripcion del negocio"
            style={styles.inputsI}
          />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setuser({ ...user, tipo: text })}
            placeholder="tipo de negocio"
            style={styles.inputsI}
          />
        </View>

        <View>
          <TextInput
            onChangeText={(text) => setuser({ ...user, direccion: text })}
            placeholder="Direccion"
            style={styles.inputsI}
          />
        </View>

        <View style={styles.containerPago}>
          <View>
            <TouchableOpacity style={styles.bottonS} onPress={OnsendHandle}>
              <Text style={styles.litle}>Guardar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.bottonS}>
              <Text style={styles.litle}>Actualizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
