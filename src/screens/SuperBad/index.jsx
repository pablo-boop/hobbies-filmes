import { View, Text, Image, ScrollView } from 'react-native';
import styles from "./styles"

import Title from '../../components/Title';
import MyButton from '../../components/MyButton';


export default function SuperBad() {

    return (
        <View style={styles.container}>
            <ScrollView>
                    <Title title={'Super Bad'} />
                    <Image source={require("../../../assets/superbad.jpg")}/>
                    <MyButton/>
            </ScrollView>
        </View>
    )
}