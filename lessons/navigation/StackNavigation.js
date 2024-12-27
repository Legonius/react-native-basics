import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import { Pressable, Text } from "react-native";
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu Button Prssed")}>
              <Text style={{ color: "#fff", paddingHorizontal: 10 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "red",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome Home" }}
          initialParams={{ name: "Guest" }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
