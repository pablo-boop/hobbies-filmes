import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles"

import { useState } from 'react';

import MyButton from '../../components/MyButton';
import Title from '../../components/Title';

export default function Ghibli() {

    const [nomeFilme, setNomeFilme] = useState('');
    const [protagonista, setProtagonista] = useState('');

    const cadastrar = () => {
        alert(`Nome: ${nomeFilme} - Protagonista: ${protagonista}`);
        setNomeFilme('');
        setProtagonista('');
    }

    return (
        <View style={styles.container}>
            <Title title={'Ghibli Screen'} />
            <View style={styles.cadastro}>
                <Text style={styles.cadastroTxt}>Cadastro de Filmes</Text>
                <TextInput
                    placeholder='Nome do Filme'
                    value={nomeFilme}
                    onChangeText={setNomeFilme}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Personagem Principal'
                    value={protagonista}
                    onChangeText={setProtagonista}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.buttonRegister} onPress={() => cadastrar()}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            <View style={styles.navigationButtons}>
                <MyButton name={'Go to Totoro'} screen={"Totoro"} />
                <MyButton name={'Back To Home'} screen={"Home"} />
            </View>
            </View>
        </View>
    )
}