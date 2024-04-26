import { View, Text } from "react-native";
import React from "react";
import { useLogin } from "../context/LoginProvider";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";
import ConferenceProvider from "../context/ConferenceProvider";

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return (
    <>
      {isLoggedIn ? (
        <ConferenceProvider>
          <AppRouter />
        </ConferenceProvider>
      ) : (
        <AuthRouter />
      )}
    </>
  );
};

export default MainNavigator;
