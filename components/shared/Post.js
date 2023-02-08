import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { More, Heart, Message, Bookmark, Comment } from "../../icons";
import FitImage from "./FitImage";
import ReadMore from "@fawazahmed/react-native-read-more";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

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
          <Text style={styles.title}>{post.user.name}</Text>
        </View>
        <More size={20} fill="#262626" />
      </View>
      <FitImage src={post.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity>
              <Heart size={24} fill="#222" style={styles.action} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Comment size={24} fill="#222" style={styles.action} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Message size={24} fill="#222" style={styles.action} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Bookmark size={24} fill="#222" />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.likes}>{post.likes} Likes</Text>
        </View>
        <ReadMore
          numberOfLines={2}
          seeMoreStyle={{ color: "#999" }}
          expandOnly={true}
          seeMoreText="more"
        >
            <Text style={styles.user}>{post.user.name}</Text>
            {`  `}
            {post.description}
        </ReadMore>
        <TouchableOpacity style={{ paddingVertical: 8 }}>
          <Text style={styles.comments}>View all {post.comment} comments</Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
        </View>
      </View>
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
    marginRight: 10,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  leftActions: {
    flexDirection: "row",
  },
  action: {
    marginRight: 12,
  },
  likes: {
    fontWeight: "600 ",
  },
  user: {
    fontWeight: "600",
  },
  comments: {
    opacity: 0.5,
    fontWeight: "500",
  },
  date: {
    fontSize: 13,
    opacity: 0.5,
  },
});
