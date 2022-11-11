import React from "react";
import { StatusBar, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { Layout } from "../../components";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../contexts/userContext";

export const User: React.FC = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { setUser } = useUserContext();

  const bottom = insets.bottom;
  const screen = Dimensions.get("screen");

  const handleGetOut = () => {
    setUser(null);
    navigation.navigate("signin");
  };

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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name={"mail"} size={14} />
            <Text style={{ fontSize: 16, opacity: 0.7, marginLeft: 9 }}>bigdanielbigbutt@gmail.com</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              width: "100%",
              backgroundColor: "#E45757",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 12,
              marginTop: screen.height - bottom - 320,
            }}
            onPress={handleGetOut}
          >
            <Text style={{ fontWeight: "700", fontSize: 24, color: "#fff" }}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
