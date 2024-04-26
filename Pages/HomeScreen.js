import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ConferencesInIndia from "./ConferencesInIndia";
import ConferencesInCanada from "./ConferencesInCanada";
import ConferencesInUK from "./ConferencesInUK";
import ConferencesInUSA from "./ConferencesInUSA";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="India">
      <Tab.Screen name="India" component={ConferencesInIndia} />
      <Tab.Screen name="USA" component={ConferencesInUSA} />
      <Tab.Screen name="Uk" component={ConferencesInUK} />
      <Tab.Screen name="Canada" component={ConferencesInCanada} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
