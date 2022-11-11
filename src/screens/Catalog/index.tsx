import React, { useCallback, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ListRenderItem,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Layout } from "../../components";
import { Feather } from "@expo/vector-icons";
import { IUserContext, useUserContext } from "../../contexts/userContext";
import { useFocusEffect } from "@react-navigation/native";
import { useFarmerController } from "../../hooks/useFarmerController";
import { Farmer, Product } from "../../@types/Farmer";
import { useCartContext } from "../../contexts/cartContext";

export const Catalog: React.FC = () => {
  const { user } = useUserContext();
  const { findAllFarmers } = useFarmerController();

  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [farmerId, setFarmerId] = useState<Farmer["_id"] | null>(null);

  const products = farmerId ? farmers.find((farmer) => farmer._id === farmerId)?.products : [];

  const onClickFarmer = async (id: Farmer["_id"]) => {
    setFarmerId(id);
  };

  const getFarmers = async () => {
    const data = await findAllFarmers();
    setFarmers(!!data ? data : []);
    if (data.length) {
      setFarmerId(data[0]._id);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (!farmers.length) getFarmers();
    }, [])
  );

  return (
    <Layout>
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <FlatList
          ListHeaderComponent={() => (
            <HeaderComponent onClickFarmer={onClickFarmer} farmers={farmers} user={user} />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={!!products ? products : []}
          renderItem={({ ...props }) => (
            <ItemCard {...props} farmer={farmers.find((farmer) => farmer._id === farmerId)?.nickname || ""} />
          )}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>
    </Layout>
  );
};

const HeaderComponent: React.FC<{
  user: IUserContext["user"];
  farmers: Farmer[];
  onClickFarmer(id: Farmer["_id"]): Promise<void>;
}> = ({ user, farmers, onClickFarmer }) => {
  // console.log(farmers);

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
          <Text style={{ fontSize: 16, color: "#000000CC" }}>Olá {user?.name}!</Text>
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
          data={farmers}
          renderItem={({ ...props }) => <CarouselItem {...props} onClickFarmer={onClickFarmer} />}
          horizontal={true}
          keyExtractor={(item) => item._id.toString()}
          ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        />
      </View>

      <View>
        <Text style={{ fontSize: 16, color: "#4D4D4D", fontWeight: "700", marginBottom: 16 }}>Alimentos</Text>
      </View>
    </>
  );
};

const ItemCard: React.FC<{ item: Product; farmer: string }> = ({ item, farmer }) => {
  const { addCart } = useCartContext();

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
            >{`${item.name} - ${item.kgPortion} KG`}</Text>
            <Text style={{ fontSize: 12, color: "#00000080", fontWeight: "400" }}>{farmer}</Text>
          </View>

          <Text style={{ color: "#00A861", fontWeight: "700", fontSize: 16 }}>
            {`R$ ${item.value.toFixed(2).toString().replace(".", ",")}`}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "column-reverse", marginLeft: "auto" }}>
        <TouchableOpacity
          onPress={() => {
            addCart({ ...item, nickname: farmer, quantity: 1 });
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
          <Feather name={"shopping-cart"} size={14} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselItem: React.FC<{ item: Farmer; onClickFarmer(id: Farmer["_id"]): Promise<void> }> = ({
  item,
  onClickFarmer,
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onClickFarmer(item._id)}>
      <View
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
          <Text style={{ fontSize: 12, fontWeight: "700" }}>{item.nickname}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
