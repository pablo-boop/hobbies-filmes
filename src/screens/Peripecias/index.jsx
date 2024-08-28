import { View, Image } from 'react-native';
import styles from "./styles"

import Title from '../../components/Title';
import MyButton from '../../components/MyButton';

export default function Peripecias() {
    return (
        <View style={styles.container}>
            <Title title={'Peripecias'}/>
            <Image source={require("../../../assets/peppo.jpg")}/>
            <MyButton />
        </View>
    )
}