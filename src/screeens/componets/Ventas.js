import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Ventas() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Fecha</Text>
        <Text style={styles.header}>Total</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>01/08/2023</Text>
        <Text style={styles.cell}>$150.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>02/08/2023</Text>
        <Text style={styles.cell}>$200.00</Text>
      </View>
      {/* Agrega más filas para cada venta */}
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
  header: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});
