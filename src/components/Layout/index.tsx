import React from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>{children}</>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
