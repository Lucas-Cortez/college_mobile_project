import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/routes/Stack.routes";
import Toast from "react-native-toast-message";
import { UserContextProvider } from "./src/contexts/userContext";
import { seedDatabase } from "./src/database/seed";
import { CartContextProvider } from "./src/contexts/cartContext";

export default function App() {
  seedDatabase();

  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
          <Toast />
        </UserContextProvider>
      </CartContextProvider>
    </>
  );
}
