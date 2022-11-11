import { Text, TouchableOpacity, View, StyleSheet, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

interface CustomButtonProps extends TouchableOpacityProps {
  variant?: "solid" | "outline";
  title: string;
  onPress(): void;
}

type VariantsProps = {
  variant: "solid" | "outline";
};

export const CustomButton: React.FC<CustomButtonProps> = ({ title, variant = "solid", onPress, ...rest }) => {
  return (
    <ButtonContainer {...rest} onPress={onPress} variant={variant}>
      <StyledText variant={variant}>{title}</StyledText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })<VariantsProps>`
  width: 100%;
  padding: 10px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${({ variant }) =>
    variant === "outline" &&
    css`
      border-color: #00a861;
      border-width: 1px;
    `}
  ${({ variant }) =>
    variant === "solid" &&
    css`
      background-color: #00a861;
    `}
`;

const StyledText = styled.Text<VariantsProps>`
  font-size: 24px;
  color: #00a861;
  font-weight: 700;
  color: ${({ variant }) => (variant === "outline" ? "#00A861" : "#ffffff")};
`;
