import React from "react"
import { View, Text } from "react-native"
import styles from './styles';

type Props = {
    total: number;
    completed: number;
};


function TaskInfo({ total, completed }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerInfoCriadas}>
                <Text style={styles.infoCriadas}>Criadas</Text>
                <View style={styles.elipse}>
                    <Text style={styles.infoElipse}>{total}</Text>
                </View>
            </View>

            <View style={styles.headerInfoConcluidas}>
                <Text style={styles.infoConcluidas}>Concluídas</Text>
                <View style={styles.elipse}>
                    <Text style={styles.infoElipse}>{completed}</Text>
                </View>
            </View>
        </View>
    )
}

export default TaskInfo