import React from "react"
import { View, Text, Image } from "react-native"
import styles from './styles';

function TaskEmpty() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/empty.png')} style={styles.image}/>

            <Text style={styles.bold}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.regular}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}

export default TaskEmpty