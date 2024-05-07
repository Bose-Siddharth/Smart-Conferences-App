import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ConferencesPage from "./ConferencesPage";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="USA">
      <Tab.Screen
        name="USA"
        children={() => <ConferencesPage country="usa" />}
      />
      <Tab.Screen
        name="India"
        children={() => <ConferencesPage country="ind" />}
      />
      <Tab.Screen
        name="Canada"
        children={() => <ConferencesPage country="canada" />}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
