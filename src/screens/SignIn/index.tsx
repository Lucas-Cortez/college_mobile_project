import React, { useState } from "react";
import { Text, View } from "react-native";
import { CustomButton, CustomTextInput, Layout } from "../../components";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useUserController } from "../../hooks/useUserController";
import { useUserContext } from "../../contexts/userContext";
// import { Service } from "../../services/Service";
// import { User } from "../../@types/User";

export const SignIn = () => {
  const { navigate } = useNavigation();
  const { authenticate } = useUserController();
  const { setUser } = useUserContext();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onPressEnter = async () => {
    if (!email || !password) {
      return Toast.show({
        type: "error",
        text1: "Campos incompletos",
      });
    }

    try {
      const user = await authenticate(email, password);
      // console.log(user);
      if (!user) {
        throw new Error("Autenticação Falhou");
      }
      const { purchases, password: passw, ...rest } = user;
      setUser({ ...rest });
      navigate("main");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: `${error}`,
        text2: "Usuário ou senha incorretos",
      });
    }
  };

  const onPressCreateAccount = () => {
    navigate("signup");
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
            <CustomTextInput onChangeText={(t) => setEmail(t)} placeholder="seu_email@email.com" />
          </View>
          <View style={{ height: 32 }} />
          <View>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8 }}>Senha</Text>
            <CustomTextInput onChangeText={(t) => setPassword(t)} secureTextEntry placeholder="*********" />
          </View>
        </View>
        <View>
          <CustomButton onPress={onPressEnter} title={"Entrar"} />
          <View style={{ height: 16 }} />
          <CustomButton onPress={onPressCreateAccount} variant={"outline"} title={"Criar uma conta"} />
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
