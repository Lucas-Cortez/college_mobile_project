import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  return (
    <>
      <StatusBar />
      <SignIn />
    </>
  );
}
