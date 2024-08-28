import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from "./styles"

import { useNavigation } from '@react-navigation/native';

import Title from '../../components/Title';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.card}>
                    <Title title={'Pablo'} />
                    <Image style={styles.img} source={require('../../../assets/pablo.jpg')} />
                    <TouchableOpacity onPress={() => navigation.navigate('Minions')}>
                        <Text style={styles.txt}>Filme: Meu filme Favorito é Minions</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt} onPress={() => navigation.navigate('Senhor')}>Hobbies: Adoro louvar o Senhor</Text>
                </View>
                <View style={styles.card}>
                    <Title title={'Caio'} />
                    <Image style={styles.img} source={require('../../../assets/caio.png')} />
                    <Text style={styles.txt} onPress={() => navigation.navigate('SuperBad')}>Filme: Meu filme Favorito é Super Bad</Text>
                    <Text style={styles.txt} onPress={() => navigation.navigate('Peripecias')}>Hobbies: adoro fazer peripécias</Text>
                </View>
            </ScrollView>
        </View>
    )
}