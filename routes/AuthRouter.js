import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingScreen from "../Pages/LandingScreen";
import LoginScreen from "../Pages/LoginScreen";
import SignupScreen from "../Pages/SignupScreen";

const Tab = createBottomTabNavigator();

const AuthRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={LandingScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Signup" component={SignupScreen} />
    </Tab.Navigator>
  );
};

export default AuthRouter;
