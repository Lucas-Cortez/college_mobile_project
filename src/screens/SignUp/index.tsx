import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";
import { BackButton, CustomButton, CustomTextInput, Layout } from "../../components";
import { useUserController } from "../../hooks/useUserController";
import Toast from "react-native-toast-message";

export const SignUp: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const { createUser } = useUserController();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleCreateAccount = async () => {
    if (!name || !email || !password || !confirmPassword) {
      return Toast.show({ type: "error", text1: "Campos incompletos" });
    }

    if (!(password === confirmPassword)) {
      return Toast.show({ type: "error", text1: "Senhas diferentes" });
    }

    try {
      const user = await createUser(name, email, password);
      // console.log(user);

      Toast.show({ type: "success", text1: "Usuário criado com sucesso" });
      navigate("signin");
    } catch (error) {
      Toast.show({ type: "error", text1: "Erro na criação do usuário" });
    }
  };

  return (
    <Layout>
      <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "space-around", paddingHorizontal: 16 }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: StatusBar.currentHeight }}>
          <BackButton onPress={() => goBack()} />

          <Text style={{ color: "#00A861", fontWeight: "700", fontSize: 28, marginLeft: 8 }}>
            Criar uma conta
          </Text>
        </View>

        <View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#4D4D4D" }}>
              Seu nome
            </Text>
            <CustomTextInput placeholder={"Big Daniel"} onChangeText={(t) => setName(t)} />
          </View>

          <View style={{ height: 32 }} />

          <View>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#4D4D4D" }}>E-mail</Text>
            <CustomTextInput placeholder={"big@daniel.com"} onChangeText={(t) => setEmail(t)} />
          </View>

          <View style={{ height: 32 }} />

          <View>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#4D4D4D" }}>Senha</Text>
            <CustomTextInput placeholder={"********"} secureTextEntry onChangeText={(t) => setPassword(t)} />
          </View>

          <View style={{ height: 32 }} />

          <View>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#4D4D4D" }}>
              Confirmar senha
            </Text>
            <CustomTextInput
              secureTextEntry
              placeholder={"******"}
              onChangeText={(t) => setConfirmPassword(t)}
            />
          </View>
        </View>

        <View>
          <CustomButton onPress={handleCreateAccount} title={"Criar uma conta"} />
        </View>
      </View>
    </Layout>
  );
};
