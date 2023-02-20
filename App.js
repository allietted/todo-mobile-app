import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TaskList from './src/components/TaskList';
import AddTask from './src/components/AddTask';

export default function App() {
  const [tasks, setTasks]=useState();
  
  return (
    <SafeAreaView style={{ backgroundColor:"#102030"}}>
        <StatusBar style="light"/>
        <AddTask setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </SafeAreaView>
    
  );
}


