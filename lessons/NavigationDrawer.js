import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import dashboard from "./screens/dashboard";
import Settings from "./screens/Settings";

export default function NavigationDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "gray",
          drawerPosition: "left",
          drawerLabelStyle: {
            color: "black",
          },
          drawerActiveTintColor: "red",
          drawerStyle: {
            backgroundColor: "plum", // same
          },
        }}
      >
        <Drawer.Screen
          options={{
            title: "My Dashboard",
            drawerLabel: "Let's Dash",
            drawerContentStyle: {
              backgroundColor: "#c6cbef", // same
            },
          }}
          name="Dashboard"
          component={dashboard}
        />
        <Drawer.Screen name="Setting" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
