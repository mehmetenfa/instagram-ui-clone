import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./Screens";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 35}}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaView>
  );
}
