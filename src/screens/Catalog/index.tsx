import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Layout } from "../../components";
import { Feather } from "@expo/vector-icons";

export const Catalog: React.FC = () => {
  return (
    <Layout>
      <View
        style={{
          // justifyContent: "center",
          // alignItems: "center",
          marginTop: StatusBar.currentHeight,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <FlatList
          ListHeaderComponent={HeaderComponent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          renderItem={ItemCard}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </Layout>
  );
};

const HeaderComponent = () => {
  return (
    <>
      <View style={{ flexDirection: "row", width: "100%", marginBottom: 24, marginTop: 32 }}>
        <View
          style={{
            height: 48,
            width: 48,
            backgroundColor: "gray",
            borderRadius: 24,
            alignItems: "center",
          }}
        />
        <View style={{ alignSelf: "center", marginLeft: 8 }}>
          <Text style={{ fontSize: 16, color: "#000000CC" }}>Olá Big Daniel!</Text>
          <Text style={{ fontSize: 16, color: "#000000CC" }}>Vamos fazer uma boa ação hoje?</Text>
        </View>
      </View>

      <View style={{ width: "100%", height: 162, marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: "#4D4D4D", fontWeight: "700", marginBottom: 16 }}>
          Agricultores
        </Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={CarouselItem}
          horizontal={true}
          keyExtractor={(item) => item.toString()}
          ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        />
      </View>

      <View>
        <Text style={{ fontSize: 16, color: "#4D4D4D", fontWeight: "700", marginBottom: 16 }}>Alimentos</Text>
      </View>
    </>
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

const CarouselItem: React.FC<{ index: number }> = ({ index }) => {
  return (
    <View
      key={index}
      style={{
        width: 180,
        height: 124,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderColor: "#00000033",
        borderWidth: 1,
      }}
    >
      <ImageBackground
        source={require("../../../assets/mineirinhos_farm.png")}
        resizeMode={"cover"}
        imageStyle={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
        style={{
          height: 80,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ borderRadius: 36, height: 72, width: 72, backgroundColor: "#CACACA" }}
          source={require("../../../assets/avatar.png")}
          resizeMode={"cover"}
        />
      </ImageBackground>
      <View style={{ height: 44, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 12, fontWeight: "700" }}>Mineirinho agricultor</Text>
      </View>
    </View>
  );
};
