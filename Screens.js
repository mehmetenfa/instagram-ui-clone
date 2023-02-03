import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

// icons
import {
  Home,
  HomeFilled,
  Search,
  SearchFilled,
  ReelFilled,
  Reel,
  Shop,
  ShopFilled,
} from "./icons";

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
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#262626",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <HomeFilled size={25} fill={color} />;

            return <Home size={25} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <SearchFilled size={25} fill={color} />;

            return <Search size={25} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <ReelFilled size={25} fill={color} />;

            return <Reel size={25} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <ShopFilled size={25} fill={color} />;

            return <Shop size={25} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={[styles.avatar, {
                borderColor: focused ? '#000' : 'transparent'
              }]}
              source={{
                uri: "https://pbs.twimg.com/profile_images/1610177519495385090/gkpozyxi_400x400.jpg",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    avatar: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 21,
    }
})

export default Screens;
