import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { CustomButton, CustomTextInput } from "../../components";

function SignUp() {
  const onPress = () => {
    console.log("apertou");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#00A861", fontWeight: "700", fontSize: 28 }}>{"Criar uma conta"}</Text>
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

export { SignUp };
