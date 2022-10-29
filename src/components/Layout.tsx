import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
// import { StatusBar } from "react-native";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};
