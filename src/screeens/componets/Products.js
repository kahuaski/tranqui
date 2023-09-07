import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  useWindowDimensions,
  FlatList,
  Modal,
  Image,
  SafeAreaView,
  FlatListProps,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { uploadFile, storage, database } from "../../database/Firebasedb";
import { collection, addDoc } from "firebase/firestore";
import styles from "../../StylesScreen/Stylestranqui";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import conexionProducts from "../../database/Conection_api";

export default function Products() {
 

  const [ModalVisibel, setModalVisibel] = useState(false);
  const navigation = useNavigation();

  const [Urls, setUrls] = useState();
  const [getProducts, setgetProducts] = useState([]);

  const [images, setimages] = useState("");
 
  const [products, setProducts] = useState({
    id_restaurants: 1,
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  let openImagePicker = async () => {
    const resusltPremission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (resusltPremission.granted === false) {
      alert("Es necesario permisos para entrar");
      return;
    }
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
    const resp = await upLoadImage(url);
    let resString = await resp.toString();
    setUrls(resString);
  };

  const upLoadImage = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("error Network fail"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const storageRef = ref(storage, `/products/${Date.now()}`);
      await uploadBytes(storageRef, blob);
      const imageUrl = await getDownloadURL(storageRef);
      console.log("aqui", imageUrl);
      setUrls(imageUrl);
      setProducts({ ...products, image: imageUrl });
    } catch (error) {
      alert(`error aqui ${error}`);
    }
  };

  // console.log(products);

  //######################################################################

  const SaveProducts = async () => {
    try {
      const url = "https://tranquiserver.onrender.com/api/v1/products";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud POST");
      }

      const responseData = await response.json();
      console.log("Respuesta:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Llamar a la función para realizar la solicitud POST

  //###########################################################################
  const OnsendHandle = async () => {
    try {
      await addDoc(collection(database, "products"), product);
      alert("guardado con exito");
    } catch (error) {}
  };

  const touchModal = () => {
    setModalVisibel(!ModalVisibel);
  };
  
 
 // console.log(getProducts)
  return (
    <>
      <View style={styles.container}>
       
        <TouchableOpacity onPress={touchModal}>
          <Text>Abrir</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={ModalVisibel}
          onRequestClose={touchModal}
        >
          <View>
            <Image
              style={styles.imgMenu}
              source={{
                uri: images
                  ? images
                  : "https://i.pinimg.com/564x/05/4c/40/054c40c0bffcd101509c155930f27b40.jpg",
              }}
            />

            <View style={styles.botonImagen}>
              <TouchableOpacity onPress={resultPicker} style={styles.saveImage}>
                <Text>Cargar Imagen... </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TextInput
              placeholder="Producto"
              style={styles.inputsI}
              onChangeText={(text) => setProducts({ ...products, name: text })}
            />
          </View>

          <View>
            <TextInput
              onChangeText={(text) =>
                setProducts({ ...products, description: text })
              }
              placeholder="Descripcion"
              style={styles.inputText}
            />
          </View>
          <View>
            <TextInput
              onChangeText={(Number) =>
                setProducts({ ...products, price: Number })
              }
              placeholder="Precio"
              style={styles.inputsI}
            />
          </View>

          <View style={styles.containerPago}>
            <View>
              <TouchableOpacity style={styles.bottonS} onPress={SaveProducts}>
                <Text style={styles.litle}>Guardar</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.bottonS}>
                <Text style={styles.litle}>Actualizar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={touchModal}>
            <Text>cerrar</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
}
