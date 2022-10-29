import React from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";
import { BackButton, CustomButton, CustomTextInput } from "../../components";
import Feather from "@expo/vector-icons/Feather";

function SignUp() {
  const onPress = () => {
    console.log("apertou");
  };

  return (
    <View style={styles.container}>
      <View>
        {/* <Feather name={"arrow-right"} size={25} style={styles.icon} /> */}
        <BackButton />
        <Text
          style={{ color: "#00A861", fontWeight: "700", fontSize: 28, marginTop: StatusBar.currentHeight }}
        >
          {"Criar uma conta"}
        </Text>
      </View>
      <View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#4D4D4D" }}>Seu nome</Text>
          <CustomTextInput placeholder={"Big Daniel"} />
        </View>
        <View style={{ height: 32 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#4D4D4D" }}>E-mail</Text>
          <CustomTextInput placeholder={"big@daniel.com"} />
        </View>
        <View style={{ height: 32 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#4D4D4D" }}>Senha</Text>
          <CustomTextInput placeholder={"********"} />
        </View>
        <View style={{ height: 32 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#4D4D4D" }}>
            Confirmar senha
          </Text>
          <CustomTextInput placeholder={"********"} />
        </View>
      </View>
      <View>
        <CustomButton onPress={onPress} title={"Criar uma conta"} />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  icon: {
    color: "#fff",
    width: 25,
    height: 25,
    // backgroundColor: "red",
    marginLeft: 50,
  },
});

export { SignUp };
