import React from "react";
import { StatusBar, Text, TouchableOpacity, View, Dimensions, Image, ScrollView } from "react-native";
import { CustomButton, Layout } from "../../components";
import { Feather } from "@expo/vector-icons";
import { CartProduct, useCartContext } from "../../contexts/cartContext";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const formatToMoney = (value: number) => `R$ ${value.toFixed(2).toString().replace(".", ",")}`;

export const Cart: React.FC = () => {
  const { total, cart, removeFromCart, increaseAmount, decreaseAmount, clearCart } = useCartContext();
  const { navigate } = useNavigation();

  const handleEndDonation = () => {
    console.log(total);
    if (total <= 5) {
      return Toast.show({ type: "error", text1: "Seu carrinho está vazio" });
    } else {
      clearCart();
      navigate("catalog");
      return Toast.show({ type: "success", text1: "Obrigado pela sua doação!" });
    }
  };

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

        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {cart.map((product) => (
            <ItemCard
              key={`${product._id}`}
              product={product}
              removeFromCart={removeFromCart}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
            />
          ))}
          <View style={{ height: 300 }} />
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
            <Text style={{ fontSize: 16, color: "#000000B2" }}>{formatToMoney(total)}</Text>
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
          <Text style={{ fontSize: 28, fontWeight: "700", color: "#000000B2" }}>
            {formatToMoney(total + 50)}
          </Text>
        </View>

        <CustomButton title="Finalizar doação" onPress={() => handleEndDonation()} />
      </View>
    </Layout>
  );
};

const ItemCard: React.FC<{
  product: CartProduct;
  removeFromCart(id: CartProduct["_id"]): void;
  increaseAmount(id: CartProduct["_id"]): void;
  decreaseAmount(id: CartProduct["_id"]): void;
}> = ({ product, increaseAmount, decreaseAmount }) => {
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
            <Text
              style={{ color: "#4D4D4D", fontSize: 16, fontWeight: "700" }}
            >{`${product.name} - ${product.kgPortion} KG`}</Text>
            <Text style={{ fontSize: 12, color: "#00000080", fontWeight: "400" }}>{product.nickname}</Text>
          </View>

          <Text style={{ color: "#00A861", fontWeight: "700", fontSize: 16 }}>
            {`R$ ${product.value.toFixed(2).toString().replace(".", ",")}`}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "column-reverse", marginLeft: "auto" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              decreaseAmount(product._id);
            }}
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
            <Feather name={"minus"} size={16} color={"white"} />
          </TouchableOpacity>
          <View
            style={{
              height: 32,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
              borderColor: "#00000033",
              borderWidth: 1,
              marginHorizontal: 6,
            }}
          >
            <Text>{product.quantity}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              increaseAmount(product._id);
            }}
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
            <Feather name={"plus"} size={16} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
