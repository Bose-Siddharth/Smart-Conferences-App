import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingScreen from "../Pages/LandingScreen";
import LoginScreen from "../Pages/LoginScreen";
import SignupScreen from "../Pages/SignupScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const AuthRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={LandingScreen}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={({ route }) => ({
          tabBarLabel: "Login",
          tabBarLabelStyle: {
            color: "rgba(0,0,0,0.85)",
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="sign-in" size={20} color={"rgba(147,218,214,1)"} />
          ),
        })}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={({ route }) => ({
          tabBarLabel: "Sign Up",
          tabBarLabelStyle: {
            color: "rgba(0,0,0,0.85)",
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-plus" size={20} color={"rgba(147,218,214,1)"} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AuthRouter;
