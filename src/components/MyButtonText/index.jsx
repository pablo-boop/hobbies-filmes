import { Text } from 'react-native';
import styles from './styles';

const MyButtonText = ({ textButton }) => {
    return (
        <Text style={styles.buttonTxt}>{textButton}</Text>
    )
}

export default MyButtonText