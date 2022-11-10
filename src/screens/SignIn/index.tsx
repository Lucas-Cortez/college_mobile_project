import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { CustomButton, CustomTextInput, Layout } from "../../components";
import styled from "styled-components/native";
// import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Service } from "../../services";
import Toast from "react-native-toast-message";

type User = {
  id: number;
  name: string;
};

export const SignIn = () => {
  const navigation = useNavigation();
  const userService = new Service<User>("user");

  const onPress = async () => {
    // navigation.navigate("main");
    // await userService.setItem({ id: 1, name: "bigDaniel" });
    // const opa = await userService.getAll();
    // await userService.remove();
    // console.log(opa);
    Toast.show({
      type: "success",
      text1: "testando",
    });
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
