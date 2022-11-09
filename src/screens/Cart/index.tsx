import React from "react";
import { StatusBar, Text, TouchableOpacity, View, Dimensions, Image, ScrollView } from "react-native";
import { CustomButton, Layout } from "../../components";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const Cart: React.FC = () => {
  return (
    <Layout>
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <Text style={{ color: "#00A861", fontWeight: "700", fontSize: 28, marginVertical: 20 }}>
          Meu carrinho
        </Text>

        <ScrollView
          //   style={{ marginBottom: 75 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </ScrollView>
      </View>

      <View
        style={{
          width: "100%",
          height: 192,
          backgroundColor: "#F2F2F2",
          padding: 16,
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
        }}
      >
        <View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, color: "#000000B2" }}>5 itens</Text>
            <Text style={{ fontSize: 16, color: "#000000B2" }}>R$ 200,00</Text>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, color: "#000000B2" }}>Frete</Text>
            <Text style={{ fontSize: 16, color: "#000000B2" }}>+ R$ 50,00</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "700", color: "#000000B2" }}>Total</Text>
          <Text style={{ fontSize: 28, fontWeight: "700", color: "#000000B2" }}>R$ 250,00</Text>
        </View>

        <CustomButton
          title="Finalizar doação"
          onPress={() => {
            console.log("finalizou");
          }}
        />
      </View>
    </Layout>
  );
};

const ItemCard: React.FC = () => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: "row",
        height: 80,
        borderColor: "#00000033",
        borderWidth: 1,
        borderRadius: 8,
        width: "100%",
        marginBottom: 8,
      }}
    >
      <Image
        style={{ borderRadius: 4, backgroundColor: "#CACACA" }}
        source={{ uri: "https://source.unsplash.com/random/900x200", width: 64, height: 64 }}
      />
      <View style={{ marginLeft: 8, justifyContent: "space-between", flexDirection: "row" }}>
        <View style={{ justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "#4D4D4D", fontSize: 16, fontWeight: "700" }}>Feijão - 2 KG</Text>
            <Text style={{ fontSize: 12, color: "#00000080", fontWeight: "400" }}>Mineirinho agricultor</Text>
          </View>

          <Text style={{ color: "#00A861", fontWeight: "700", fontSize: 16 }}>R$ 15,99</Text>
        </View>
      </View>

      <View style={{ flexDirection: "column-reverse", marginLeft: "auto" }}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={{
            height: 32,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00A861",
            borderRadius: 4,
          }}
        >
          <Feather name={"shopping-cart"} size={14} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
