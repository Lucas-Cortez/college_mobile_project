import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/routes/Stack.routes";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
