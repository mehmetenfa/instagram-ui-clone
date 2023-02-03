import { StyleSheet, View } from "react-native";
import { Logo } from "../../../icons"

function Header() {
    return (
        <View style={styles.header}>
            <Logo size={104} fill='#000' />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
    }
})