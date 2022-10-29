import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export const BackButton: React.FC = () => {
  return (
    <TouchableOpacity>
      <Feather name={"arrow-left"} size={25} />
    </TouchableOpacity>
  );
};
