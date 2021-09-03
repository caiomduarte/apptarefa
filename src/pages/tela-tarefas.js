import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native';

import TaskList from './Tasklist';

export default function TelaTarefas() {

    //Criando uma lista de tarefas fixa
    let [tasks, setTasks] = useState([
        { key: '1', nome: 'Comprar pao' },
        { key: '2', nome: 'Aprender React Native com firebase' },
        { key: '3', nome: 'Seguir o sujeito programador no youtube!' },
    ]);


    return (
        <View style={styles.container}>
            <Text style={{fontSize:25, marginBottom:30}}>Minhas Tarefas</Text>
            <View style={styles.containerTask}>
                <TextInput style={styles.input} placeholder="O que vai fazer hoje?"
                    underlineColorAndroid="transparent"
                />

                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <TaskList data={item} />
                )}

            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        marginLeft: 10,
        marginRight: 10,
        justifyContent:'center',
        alignItems:'center'
    },

    containerTask: {
        flexDirection: 'row'
    },

    input: {
        flex: 1,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 17
    },

    buttonAdd: {
        justifyContent: 'center',
        alignContent: 'center',
        height: 40,
        backgroundColor: '#121212',
        paddingLeft: 14,
        paddingRight: 14,
        marginLeft: 5

    },

    buttonText: {
        fontSize: 23,
        color: '#FFF'
    }
});


