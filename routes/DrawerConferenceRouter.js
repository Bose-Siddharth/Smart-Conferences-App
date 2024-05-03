import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button, View } from "react-native"; // Assuming you are using React Native
import ConferenceHomeScreen from "../Pages/ConferenceHomeScreen";
import CommitteeScreen from "../Pages/CommitteeScreen";
import KeynoteScreen from "../Pages/KeynoteScreen";
import ContactScreen from "../Pages/ContactScreen";
import { useConference } from "../context/ConferenceProvider";

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
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <DrawerItemList {...props} />
      <View
        style={{ marginVertical: 20, paddingHorizontal: 10, marginTop: "auto" }}
      >
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerConferenceRouter = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={ConferenceHomeScreen} />
      <Drawer.Screen name="Committee" component={CommitteeScreen} />
      <Drawer.Screen name="Keynote" component={KeynoteScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerConferenceRouter;
