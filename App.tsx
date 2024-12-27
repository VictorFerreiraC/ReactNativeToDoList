import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './src/styles/styles';

import Header from './src/components/Header';
import NewTask from './src/components/NewTask';
import TaskInfo from './src/components/TaskInfo';
import Task from './src/components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      
      <NewTask />
      
      <TaskInfo />

      <Task />

      <StatusBar style="light" />
    </View>
  );
}