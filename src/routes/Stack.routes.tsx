import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { TabNavigation } from "./Tab.routes";

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: "Entrar" }} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Dashboard" component={TabNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
