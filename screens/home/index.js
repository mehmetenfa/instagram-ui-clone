import { View, Text, StyleSheet } from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "../../components/shared/Post";
import posts from "../../data/posts";

function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Stories />
            {posts.map(post => <Post key={post.id} post={post} />)}
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})