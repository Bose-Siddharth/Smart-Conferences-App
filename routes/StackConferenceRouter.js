import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Pages/HomeScreen";

const Stack = createNativeStackNavigator();

const StackConferenceRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerTitle: "SMART Society Conferences" }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackConferenceRouter;
