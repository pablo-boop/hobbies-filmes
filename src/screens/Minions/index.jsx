import { View, Text, Image, ScrollView } from 'react-native';
import styles from "./styles"

import Title from '../../components/Title';
import MyButton from '../../components/MyButton';


export default function Minions() {

    return (
        <View style={styles.container}>
            <ScrollView>
                    <Title title={'Minions'} />
                    <Image source={require("../../../assets/minions.webp")}/>
                    <MyButton/>
            </ScrollView>
        </View>
    )
}