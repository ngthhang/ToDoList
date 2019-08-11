import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SingleToDoScreen(props) {
    const { id, body, status } = props.navigation.state.params.updateTodo;
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {id}: {status}
            </Text>
            <Text style={styles.body}>
                {body}
            </Text>
        </View>
    );
}

SingleToDoScreen.navigationOptions = {
    title: 'SingleToDo Item'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: '700'
    },
    body: {
        fontSize: 30,
        fontWeight: '300',
        margin: 5,
        textAlign: 'justify'
    }
})