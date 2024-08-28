import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f5f5f5',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e7e7e7',
        width: "auto",
        margin: 20,
        padding: 10,
        borderRadius: 10
    },
    img: {
        height: 200,
        width: 300,
        borderRadius: 5
    },
    txt: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
        padding: 5
    }
})