import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//import icones
import { Feather } from '@expo/vector-icons';

export default function TaskList({data}) {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={{ marginRight: 10 }}>
                <Feather name="trash" size={24} color="#FFF" />
            </TouchableOpacity>

            <View style={{ paddingRight: 15 }}>
                <Text style={{color:'#FFF', paddingRight:10}}>{data.nome}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        backgroundColor:'#121212',
        alignItems:'center',
        marginBottom:10,
        padding:10,
        borderRadius:5
    }
})