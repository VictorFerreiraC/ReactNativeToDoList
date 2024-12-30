import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Alert } from 'react-native';
import styles from './src/styles/styles';

import Header from './src/components/Header';
import NewTask from './src/components/NewTask';
import TaskInfo from './src/components/TaskInfo';
import Task from './src/components/Task';

type TaskType = {
  id: number;
  description: string;
  done: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  // Função para adicionar nova tarefa
  const addTask = (description: string) => {
    const newTask: TaskType = {
      id: Date.now(), // Gera um ID único
      description,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Alterna o status da tarefa (feito/não feito)
  const toggleTaskStatus = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // Adicionando função para remover tasks
  const removeTask = (id: number) => {
    Alert.alert('Remover', `Remover tarefa ?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(tasks.filter(task => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  };


  return (
    <View style={styles.container}>
      <Header />

      <NewTask onAddTask={addTask} />

      <TaskInfo total={tasks.length} completed={tasks.filter(t => t.done).length} />

      <Task tasks={tasks} onToggleStatus={toggleTaskStatus} onRemoveTask={removeTask} />

      <StatusBar style="light" />
    </View>
  );
}