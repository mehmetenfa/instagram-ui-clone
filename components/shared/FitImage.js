import { Image, Dimensions } from "react-native";

function FitImage({ src }) {

    const width = Dimensions.get('window').width
    const ratio = 1129 / width
    const height = 750 / ratio


    return (
        <Image 
        style={{
            width,
            height,
        }}
            source={{
            uri: src
        }} 
      />
    )
}


export default FitImage;