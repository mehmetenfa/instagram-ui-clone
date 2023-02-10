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
          <View style={styles.dot} />
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
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FE3650",
    width: 10,
    height: 10,
    borderRadius: 10,
    zIndex: 2,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
