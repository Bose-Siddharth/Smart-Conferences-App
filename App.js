import LoginProvider from "./context/LoginProvider";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes";
import 'react-native-gesture-handler'

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}
