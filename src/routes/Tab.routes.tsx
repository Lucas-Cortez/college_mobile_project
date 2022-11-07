import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Catalog } from "../screens/Catalog";
import { Catalog } from "../screens/Catalog";
import { Feather } from "@expo/vector-icons";
import { User } from "../screens/User";

const SettingsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="catalog"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "#0000001A",
          borderTopWidth: 1,
          backgroundColor: "#F9F9F9",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00A861",
        // tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="catalog"
        options={{
          tabBarIcon: ({ focused, ...props }) => <Feather name="home" {...props} />,
        }}
        component={Catalog}
      />
      <Tab.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused, ...props }) => <Feather name="shopping-cart" {...props} />,
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, ...props }) => <Feather name="user" {...props} />,
        }}
        component={User}
        name="user"
      />
    </Tab.Navigator>
  );
}
