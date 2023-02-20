import { ScrollView, Text,TouchableOpacity } from "react-native";
import { useEffect} from "react";
import TaskCard from "./TaskCard";
import {styles} from "../../styles";

export default function TaskList({tasks, setTasks}){
    //fetch tasklist in useEffect only once 
    useEffect(()=>{
    fetch("https://todo-api-ad.web.app/tasks")
    .then(res => res.json())
    .then(setTasks)
    .catch(console.error)
    },[]);

    const toggleDone =(task) =>{
        const done =!!!task.done;//true, false, undefined
        fetch(`https://todo-api-ad.web.app/tasks/${task.taskId}`,{
         method:"PATCH",
         headers:{
            "Content-Type": "application/json",
         },
         body: JSON.stringify({done}),
        })
        .then(res => res.json())
        .then(setTasks)
        .catch(console.error);
    };
    
    
    return(
        <ScrollView style={styles.scrollView}>    
           {! tasks ? ( <Text>Loading...</Text>)
            : tasks.map((element)=>(
               <TouchableOpacity onPress={()=> toggleDone(element)}
                key={element.taskId}>
                <TaskCard data={element} setTasks={setTasks}/>
               </TouchableOpacity>
            ))
            }
        </ScrollView>
    );
}

