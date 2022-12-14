import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { TabNavigation } from "./Tab.routes";
import { UserContextProvider } from "../contexts/userContext";

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="signin">
      <Stack.Screen name="signin" component={SignIn} options={{ title: "Entrar" }} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="main" component={TabNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
