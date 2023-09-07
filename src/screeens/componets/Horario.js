import { StyleSheet, Text, View, FlatList, SectionList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Horario() {
  const [dato, setdato] = useState([]);
   useEffect(() => {
    axios.get("https://tranquiserver.onrender.com/api/v1/users")
      .then((response) => {
        setdato(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const filteredData = data.filter(item => item.name.trim() !== "");

  console.log(dato);
  return (
    <View style={styles.container}>
      
      <View>
      {dato.length === 0 ? (
      <ActivityIndicator size="large" color="#0000ff" /> // Muestra un indicador de carga
    ) : (
      <FlatList
        data={dato}
       // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    )}
      </View>
      <View style={styles.row}>
        <Text style={styles.day}>Día</Text>
        <Text style={styles.time}>Horario</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.day}>Lunes</Text>
        <Text style={styles.time}>9:00 AM - 10:00 PM</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.day}>Martes</Text>
        <Text style={styles.time}>9:00 AM - 10:00 PM</Text>
      </View>
      {/* Agrega más filas para cada día */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  day: {
    fontWeight: "bold",
    flex: 1,
  },
  time: {
    flex: 2,
  },
});
