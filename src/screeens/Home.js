import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "./componets/Products";
import Users from "./componets/Users";
import { ColorSpace } from "react-native-reanimated";
import Horario from "./componets/Horario";
import Ventas from "./componets/Ventas";
import Billetera from "./componets/Billetera";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Home() {
  const badgeValue = 1;
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Productos"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Productos") {
            iconName = focused ? "ios-fast-food" : "ios-fast-food-outline";
          }
          if (route.name === "Registro") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

          if (route.name === "Horario") {
            iconName = focused ? "ios-calendar" : "ios-calendar-outline";
          }

          if (route.name === "Ventas") {
            iconName = focused ? "ios-cash" : "ios-cash-outline";
          }
          if (route.name === "Billetera") {
            iconName = focused ? "ios-wallet" : "ios-wallet-outline";
          }

          return <Ionicons name={iconName} color={color} size={35} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarItemStyle: { backgroundColor: "#FF9B10" },

        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Productos"
        component={Products}
        options={{
          tabBarBadge: badgeValue ? badgeValue.toString() : null,
        }}
      />
      <Tab.Screen name="Registro" component={Users} />

      <Tab.Screen name="Horario" component={Horario} />

      <Tab.Screen name="Ventas" component={Ventas} />

      <Tab.Screen name="Billetera" component={Billetera} />
    </Tab.Navigator>
  );
}
