import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import dashboard from "./screens/dashboard";
import Settings from "./screens/Settings";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import StackNavigation from "./navigation/StackNavigation";

export default function TabNavi() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "beside-icon",
          tabBarStyle: {
            backgroundColor: "wheat",
          },
          tabBarLabelStyle: {
            fontSize: 20,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarBadge: 3,
            tabBarIcon: () => <Fontisto name="home" size={24} color="black" />,
          }}
          name="Home"
          component={dashboard}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="settings" size={24} color="black" />
            ),
            title: "Title Setting",
          }}
          name="Setting"
          component={Settings}
        />
        <Tab.Screen name="StackNavi" component={StackNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
