import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",

    padding: 1,
    //shadowColor: "#fff",
    backgroundColor: "#FF5235",
    shadowColor: "black",
    borderBottomColor: "black",
  },
  title: {
    fontSize: 30,
    borderRadius: 20,
    margin: 10,
    padding: 15,
    fontWeight: 900,
    fontStyle: "italic",
    color: "white",
  },

  imgtranqui: {
    margin: 20,
    width: 100,
    height: 100,
  },
  imgMenu: {
    //margin: 20,
    width: 400,
    height: 200,
   // borderRadius: 5,
  // elevation:10

    //shadowColor: "black",
  },

  imgserver: {
    margin: 5,
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth:5,
    borderColor:"black"

    //shadowColor: "black",
  },
  menu: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 1,
    borderRadius: 80,
    margin: 20,
    gap: 10,
    elevation: 5,
    shadowColor: "black",
    backgroundColor: "orange",
  },
  containerMenu: {
    flex: 0,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: "90%",
    height: "90%",
    borderRadius: 40,
    elevation: 4,
  },
  containerInicio: {
    flex: 1,
    position: "absolute",
    backgroundColor: "orange",
    borderRadius: 40,
    elevation: 4,
    padding: 10,
    alignItems: "center",
  },
  botonImagen: {
    flex: 1,
    marginTop:15,
    //position: "absolute",
    backgroundColor: "#FFDB58",
    borderRadius: 50,
    elevation: 2,
    shadowColor:'black',
    shadowOpacity:10,
    padding: 10,
    alignItems: "center",
    marginHorizontal:20
  },

  titleArticule: {
    fontSize: 24,
    fontStyle: "italic",
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },

  inputs: {
    paddingHorizontal: 60,
    //backgroundColor: "white",
    borderRadius: 50,
    //elevation: 4,
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: "900",
  },

  inputsI: {
    width: "100%",
    height: 40,
    paddingHorizontal: 50,
    backgroundColor: "white",
    borderRadius: 4,
    elevation: 10,

    //paddingVertical: 5,
    margin: 10,
  },
  inputText: {
    marginHorizontal:20,
    backfaceVisibility:"hidden",
    width: 300,
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor:"gray"
  },

  containerhome: {
    //flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    //backgroundColor: "#FF5235",
    padding: 5,
  },

  containerPago: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: "space-between",
    borderStyle: "solid",

    padding: 2,
    // height: 200,
    //alignContent: "flex-end",
  },
  bottonS: {
    backgroundColor: "#FF5300",
    borderRadius: 60,
    borderColor: "black",
    borderTopColor: "black",
    margin: 10,
    elevation: 4,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  litle: {
    flex: 0,
    textAlign: "center",
    fontWeight: "700",
    color: "white",
    // gap: 10,
    //margin: 10,
    //padding: 10,
  },
  registro: {
    fontSize: 24,
    color: "white",
    textDecorationStyle: "dashed",
  },

  saveImage: {
    //backgroundColor: "white",
    fontSize: 24,
    borderRadius: 50,
  },
});

export default styles;
