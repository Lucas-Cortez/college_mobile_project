import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CustomButton, CustomTextInput, Layout } from "../../components";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("main");
    // popIn();
  };

  const makeAccountPage = () => {
    // navigation.navigate("SignUp");
    navigation.navigate("signup");
  };

  return (
    <Layout>
      <Container>
        <View>
          <Text style={{ color: "#00A861", fontWeight: "700", fontSize: 28 }}>
            {"Olá! Seja bem vindo(a)!"}
          </Text>
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
            <CustomTextInput secureTextEntry placeholder="************" />
          </View>
        </View>
        <View>
          <CustomButton onPress={onPress} title={"Entrar"} />
          <View style={{ height: 16 }} />
          <CustomButton onPress={makeAccountPage} variant={"outline"} title={"Criar uma conta"} />
        </View>
      </Container>
    </Layout>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 16px;
`;
