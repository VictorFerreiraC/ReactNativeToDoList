import * as React from "react"
import { View, TextInput } from "react-native"
import styles from './styles';

function NewTask() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default NewTask