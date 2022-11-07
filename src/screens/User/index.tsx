import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Layout } from "../../components";

export const User: React.FC = () => {
  return (
    <Layout>
      <View
        style={{
          marginTop: StatusBar.currentHeight,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginBottom: 24,
            marginTop: 32,
            paddingLeft: 16,
            paddingRight: 16,
            backgroundColor: "#F1F1F1",
            height: 80,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 64,
              width: 64,
              backgroundColor: "gray",
              borderRadius: 32,
              alignItems: "center",
            }}
          />
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#000000CC", marginLeft: 16 }}>
            Big Daniel
          </Text>
        </View>

        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Text style={{ fontSize: 16, opacity: 0.7 }}>bigdanielbigbutt@gmail.com</Text>
          <Text style={{ fontSize: 16, opacity: 0.7 }}>bigdanielburro123</Text>
        </View>
      </View>
    </Layout>
  );
};
