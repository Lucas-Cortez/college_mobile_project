import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  title: string;
  onPress(): void;
}

function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export { Button };
