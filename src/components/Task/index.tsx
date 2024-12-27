import React from "react"
import { View, Text, FlatList } from "react-native"
import styles from './styles';

import TaskEmpty from '../TaskEmpty';

function Task() {
    return (
        <View style={styles.container}>
            <FlatList
                data={[]}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Text>
                        {item}
                    </Text>
                )}
                ListEmptyComponent={() => (
                    <TaskEmpty />
                )}
            />
        </View>
    )
}

export default Task