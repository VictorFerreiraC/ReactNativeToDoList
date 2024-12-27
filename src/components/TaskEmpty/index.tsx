import React from "react"
import { View, Text } from "react-native"
import styles from './styles';

function TaskEmpty() {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.regular}>
                Você ainda não tem tarefas cadastradas
            </Text>
        </View>
    )
}

export default TaskEmpty