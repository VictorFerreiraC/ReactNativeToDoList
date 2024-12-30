import React, { useState } from "react"
import { View, TextInput, TouchableOpacity } from "react-native"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import styles from './styles';

import Plus from "../icons/Plus";

type Props = {
    onAddTask: (description: string) => void;
};

function NewTask({ onAddTask }: Props) {
    const [isFocused, setIsFocused] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');

    const handleAddTask = () => {
        if (taskDescription.trim()) {
            onAddTask(taskDescription); // Passa para o componente pai
            setTaskDescription(''); // Limpa o campo
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={[styles.input, isFocused && styles.inputFocused]}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={styles.placeholder.color}
                onFocus={() => setIsFocused(true)}   // Quando o input recebe foco
                onBlur={() => setIsFocused(false)}  // Quando o input perde foco
                value={taskDescription}
                onChangeText={setTaskDescription}
            >
            </TextInput>

            <TouchableOpacity style={styles.button}
                onPress={handleAddTask}
            >
                <Plus />
            </TouchableOpacity>
        </View>
    )
}

export default NewTask