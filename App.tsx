import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/routes/Stack.routes";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
}
