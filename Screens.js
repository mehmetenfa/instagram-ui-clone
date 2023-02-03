import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// screens

import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import ReelScreen from "./screens/Reel";
import SearchScreen from "./screens/Search";
import ShopScreen from "./screens/Shop";

function Screens() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false
        }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="search" component={SearchScreen} />
      <Tab.Screen name="reel" component={ReelScreen} />
      <Tab.Screen name="shop" component={ShopScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Screens;
