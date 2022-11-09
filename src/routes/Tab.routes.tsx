import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Catalog } from "../screens/Catalog";
import { Feather } from "@expo/vector-icons";
import { User } from "../screens/User";
import { Cart } from "../screens/Cart";

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
        name="cart"
        options={{
          tabBarIcon: ({ focused, ...props }) => <Feather name="shopping-cart" {...props} />,
        }}
        component={Cart}
      />
      <Tab.Screen
        name="user"
        options={{
          tabBarIcon: ({ focused, ...props }) => <Feather name="user" {...props} />,
        }}
        component={User}
      />
    </Tab.Navigator>
  );
}
