import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const MyButton = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
            <Text>Home</Text>
        </TouchableOpacity>
    )
}

export default MyButton