import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

function CustomTextInput(props: TextInputProps) {
  return <TextInput style={styles.input} {...props} placeholderTextColor={"#CACACA"} />;
}
export { CustomTextInput };
