import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CustomButtonProps {
  variant?: "solid" | "outline";
  title: string;
  onPress(): void;
}

function CustomButton({ title, onPress, variant = "solid" }: CustomButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={variant === "solid" ? styles.button : styles.button_outline}
    >
      <Text style={variant === "solid" ? styles.text : styles.text_outline}>{title}</Text>
    </TouchableOpacity>
  );
}

export { CustomButton };
