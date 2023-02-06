import { View, Text, StyleSheet, Image } from "react-native";

function Post({ post }) {
  return (
    <View>
      <View style={styles.header}>
            <Text>sol</Text>
            <Text>orta</Text>
            <Text>sağ</Text>
      </View>   
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
})
