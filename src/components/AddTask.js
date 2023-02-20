import { useState } from 'react';
import { View,Text, TextInput, Pressable} from 'react-native';
import {styles} from "../../styles";

export default function AddTask({setTasks}){
    const [task, setTask]=useState("");

    const handleAddNewTask=()=>{
        const newTask ={
            done:false, 
            task:task,
        };
        setTask("")
        fetch(`https://todo-api-ad.web.app/tasks`,{
         method:"POST",
         headers:{
            "Content-Type":"application/json",
         },
         body:JSON.stringify(newTask), 
        })
        .then(res=>res.json())
        .then(setTasks)
        .catch(console.error);
    };

    return(    
        <View style={styles.addTaskContainer}>
            <TextInput style={styles.input}
                value={task} onChangeText={setTask}/>
            <Pressable style={styles.button} onPress={handleAddNewTask}>
                <Text style={styles.text}>Add</Text>
            </Pressable>
        </View>    
    );
}

