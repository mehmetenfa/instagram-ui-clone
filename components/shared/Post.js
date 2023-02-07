import { View, Text, StyleSheet, Image } from "react-native";
import { More } from "../../icons";
import FitImage from "./FitImage";

function Post({ post }) {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image
            style={styles.avatar}
            source={{
              uri: post.user.avatar,
            }}
          />
          <Text style={styles.text}>{post.user.name}</Text>
        </View>
        <More size={20} fill="#262626" />
      </View>
      <FitImage src={post.image} />
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 49,
    paddingHorizontal: 15,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10
  },
  username: {
    flexDirection: "row",
    alignItems: 'center',
  },
  text: {
    fontSize: 14 ,
    fontWeight: '600',
  },
});
