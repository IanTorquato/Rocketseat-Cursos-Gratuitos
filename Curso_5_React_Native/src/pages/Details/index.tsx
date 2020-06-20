import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Agora Foi</Text>
            <Text style={styles.textHappy}>Finalmeeente</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        //backgroundColor: '#0c40a8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 40,
        color: '#fff'
    },
    textHappy: {
        fontSize: 16,
        marginLeft: 150,
        color: '#fff'
    }
});

export default Details