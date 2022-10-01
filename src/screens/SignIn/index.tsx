import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { CustomButton, CustomTextInput } from "../../components";

function SignIn() {
  const onPress = () => {
    console.log("apertou");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#00A861", fontWeight: "700", fontSize: 28 }}>{"Olá! Seja bem vindo(a)!"}</Text>
        <Text style={{ fontSize: 16, color: "#4D4D4D" }}>
          {"Acesse ou crie uma conta para ajudar pessoas"}
        </Text>
      </View>
      <View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8 }}>E-mail</Text>
          <CustomTextInput placeholder="seu_email@email.com" />
        </View>
        <View style={{ height: 32 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8 }}>Senha</Text>
          <CustomTextInput placeholder="************" />
        </View>
      </View>
      <View>
        <CustomButton onPress={onPress} title={"Entrar"} />
        <View style={{ height: 16 }} />
        <CustomButton onPress={onPress} variant={"outline"} title={"Criar uma conta"} />
      </View>
    </View>
  );
}

export { SignIn };
