import React, { useState } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import styles from './styles';

import TaskEmpty from '../TaskEmpty';
import CheckIcon from "../icons/CheckIcon";
import Trash from "../icons/Trash";

type TaskType = {
    id: number;
    description: string;
    done: boolean;
};

type Props = {
    tasks: TaskType[];
    onToggleStatus: (id: number) => void;
    onRemoveTask: (id: number) => void;
};

function Task({ tasks, onToggleStatus, onRemoveTask }: Props) {

    const renderTask = ({ item }: { item: TaskType }) => (
        <View style={styles.task}>
            <TouchableOpacity onPress={() => onToggleStatus(item.id)}>
                <View style={[styles.circle, item.done && styles.checkedCircle]}>
                    {item.done && <CheckIcon/>}
                </View>
            </TouchableOpacity>

            <Text style={[styles.taskText, item.done && styles.done]}>
                {item.description}
            </Text>

            <TouchableOpacity onPress={() => onRemoveTask(item.id)}>
                <View style={styles.trash}>
                    <Trash/>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTask}
                ListEmptyComponent={() => (
                    <TaskEmpty />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Task