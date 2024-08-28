import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#f5f5f5',
    },
    navigationButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    cadastro: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#333',
        borderRadius: 5,
        height: 400
    },
    cadastroTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        margin: 20
    },
    input: {
        width: 300,
        height: 40,
        padding: 12,
        margin: 5,
        backgroundColor: '#e7e7e7',
        borderRadius: 5
    },
    buttonRegister: {
        width: 250,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    }
})