import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()

    function handleNavigateToDetails() {
        navigation.navigate('Details')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Tudo OK Ainda</Text>
            <Text style={styles.textSad}>por enquanto...</Text>

            <RectButton style={styles.button} onPress={() => { handleNavigateToDetails() }}>
                <Text style={styles.textButton}>Mudar Página</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        //backgroundColor: '#0c40a8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 40,
        color: '#fff'
    },
    textSad: {
        fontSize: 16,
        marginLeft: 150,
        color: '#fff'
    },
    button: {
        width: 220,
        height: 50,
        backgroundColor: '#fff',
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textButton: {
        fontSize: 26
    }
});

export default Home