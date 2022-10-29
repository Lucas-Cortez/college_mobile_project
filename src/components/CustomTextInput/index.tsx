import { TextInputProps } from "react-native";
import styled from "styled-components/native";

export const CustomTextInput: React.FC<TextInputProps> = (props) => {
  return <StyledInput {...props} placeholderTextColor={"#CACACA"} />;
};

const StyledInput = styled.TextInput`
  height: 48px;
  border-color: "gray";
  border-width: 1px;
  border-radius: 8px;
  background-color: #f5f7f9;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
`;
