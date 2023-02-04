import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Logo, Heart, Plus, Chat } from "../../../icons";

function Header() {
  return (
    <View style={styles.header}>
      <Logo size={104} fill="#000" />
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity="" style={styles.button}>
          <Plus size={24} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.6" style={styles.button}>
          <Heart size={24} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.6" style={styles.button}>
          <Chat size={24} fill="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: "row",
  },
  button: {
    marginLeft: 20,
  },
});
