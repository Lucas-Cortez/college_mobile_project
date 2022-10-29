import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const SettingsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  );
};

const Dashboard: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dashboard</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="">
      <Tab.Screen name="List" component={Dashboard} options={{ headerShown: true }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
}
