import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button, Pressable, Text, View } from "react-native"; // Assuming you are using React Native
import ConferenceHomeScreen from "../Pages/ConferenceHomeScreen";
import CommitteeScreen from "../Pages/CommitteeScreen";
import KeynoteScreen from "../Pages/KeynoteScreen";
import ImportantDatesScreen from "../Pages/ImportantDatesScreen";
import { useConference } from "../context/ConferenceProvider";
import Icon from "react-native-vector-icons/FontAwesome";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { setIsItemSelected } = useConference();

  const handleLogout = () => {
    // Handle logout functionality here
    // For example, clear user session, navigate to login screen, etc.
    setIsItemSelected(false);
    // You may want to add further logout logic here
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, gap: 16 }}
    >
      <DrawerItemList {...props} />
      <View
        style={{ marginVertical: 20, paddingHorizontal: 10, marginTop: "auto" }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            padding: 16,
            backgroundColor: "rgba(189, 233, 231, 1)",
            borderRadius: 16,
            borderColor: "rgba(44, 220, 212, 0.6)",
            borderWidth: 2,
          }}
          onPress={handleLogout}
        >
          <Icon name="arrow-left" size={18} color="#2cdcd4" />
          <Text>All Conferences</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerConferenceRouter = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "rgba(189, 233, 231, 1)",
        drawerActiveTintColor: "#666",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
          marginLeft: "10%",
        },
      }}
    >
      <Drawer.Screen name="Home" component={ConferenceHomeScreen} />
      <Drawer.Screen name="Committee" component={CommitteeScreen} />
      <Drawer.Screen name="Keynote" component={KeynoteScreen} />
      <Drawer.Screen name="Dates" component={ImportantDatesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerConferenceRouter;
