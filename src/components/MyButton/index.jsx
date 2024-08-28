import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import MyButtonText from '../MyButtonText';

const MyButton = ({ screen, name }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(screen)}>
            <MyButtonText textButton={name}/>
        </TouchableOpacity>
    )
}

export default MyButton