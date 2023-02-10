import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Logo, Heart, Plus, Chat } from "../../../icons";

function Header() {
  return (
    <View style={styles.header}>
      <Logo size={110} fill="#000" />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Plus size={24} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Heart size={24} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Chat size={24} fill="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 44,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 4,
  },
  actions: {
    flexDirection: "row",
  },
  button: {
    marginLeft: 20,
  },
  dot: {
    backgroundColor: "#FE3650",
    width: 8,
    height: 8,
    borderRadius: 10,
  },
  dotContainer: {
    zIndex: 2,
    backgroundColor: "#fff",
    width: 11,
    height: 11,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },
});
