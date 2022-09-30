import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components";

function SignIn() {
  const onPress = () => {
    console.log("apertou");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>{"Olá! Seja bem vindo(a)!"}</Text>
      </View>
      <View>
        <View>
          <Text>Email</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
            }}
          />
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
            }}
          />
        </View>
        <View>
          <Text>Esqueci minha senha</Text>
        </View>
        <Button onPress={onPress} title={"Entrar"} />
        <Button onPress={onPress} title={"Criar uma conta"} />
      </View>
    </View>
  );
}

export { SignIn };
