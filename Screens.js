import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
            if (focused) return <HomeFilled size={30} fill={color} />;

            return <Home size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <SearchFilled size={30} fill={color} />;

            return <Search size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <ReelFilled size={30} fill={color} />;

            return <Reel size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <ShopFilled size={30} fill={color} />;

            return <Shop size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Screens;
