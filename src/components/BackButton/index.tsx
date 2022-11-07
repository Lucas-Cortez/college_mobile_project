import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const BackButton: React.FC<TouchableOpacityProps> = (props) => {
  return (
    <StyledBackButton {...props}>
      <Feather name={"arrow-left"} size={22} />
    </StyledBackButton>
  );
};

const StyledBackButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  background-color: #e2e2e2;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
