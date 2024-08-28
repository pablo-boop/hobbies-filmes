import { View, Image } from 'react-native';
import styles from "./styles"

import Title from '../../components/Title';
import MyButton from '../../components/MyButton';

export default function Senhor() {
    return (
        <View style={styles.container}>
            <Title title={'Senhor'} />
            <Image source={require("../../../assets/senhor.jpg")}/>
            <MyButton />
        </View>
    )
}