import { View } from 'react-native';
import styles from "./styles"

import MyButton from '../../components/MyButton';

import Title from '../../components/Title';

export default function Home() {
    return (
        <View style={styles.container}>
            <Title title={'Home Screen'} />
            <View style={styles.navigationButtons}>
                <MyButton name={'Go to Totoro'} screen={"Totoro"} />
                <MyButton name={'Go to Ghibli'} screen={"Ghibli"} />
            </View>
        </View>
    )
}