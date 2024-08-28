import { View } from 'react-native';
import styles from "./styles";

import MyButton from '../../components/MyButton';

import Title from '../../components/Title';

export default function Totoro() {
    return (
        <View style={styles.container}>
            <Title title={'My neighbor Totoro'} />
            <View style={styles.navigationButtons}>
                <MyButton name={"Back To Home"} screen={"Home"} />
                <MyButton name={"Go To Ghibli"} screen={"Ghibli"} />
            </View>
        </View>
    )
}