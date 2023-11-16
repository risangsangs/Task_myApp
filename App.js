import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/loginScreen";
import RegisterScreen from "./src/screens/registerScreen";
import HomeScreen from "./src/screens/homeScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular: require("./src/assets/fonts/Urbanist-Regular.ttf"),
    Urbanist_500Medium: require("./src/assets/fonts/Urbanist-Medium.ttf"),
    Urbanist_600SemiBold: require("./src/assets/fonts/Urbanist-SemiBold.ttf"),
    Urbanist_700Bold: require("./src/assets/fonts/Urbanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
