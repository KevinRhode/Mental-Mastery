import React, { Component } from "react";
import Auth from "../utils/auth";
import TaskList from "./TaskList";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CREATE_TASK,DELETE_TASK } from "../utils/mutations";
import { QUERY_ALL_TASKS } from "../utils/queries";

import cardBackgroundImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';
import TaskForm from "./TaskForm";

const Tasks = (props) => {
  const [formState, setFormState] = useState({ taskname: "", location: ""});
  const [listState, setListState] = useState([...props.tasks]);

  const { loading, err, data } = useQuery(QUERY_ALL_TASKS);
  const [createTask, { error }] = useMutation(CREATE_TASK);
  const [deleteTask, {delErr}] = useMutation(DELETE_TASK);
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const authContext = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const tasksStyle = {
      backgroundImage: `url(${cardBackgroundImage})`,
      padding: '20px',
      // marginTop: '40px',
      boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3)',
      color: 'white',
      fontWeight: '800',
      textShadow: '0 0 10px rgba(0, 0, 100, 0.5)',
      zIndex: 1,
      borderRadius: '10px',
      border: '1px solid #1a1a1a',
      backgroundColor: 'white',
    };

    const submitButtonStyles = {
      marginTop: '10px',
      padding: '5px 10px',
      backgroundColor: '#1b5060',
      color: 'white',
    };

    const inputBox = {
      // width: '650px',
      padding: '5px',
      margin: '5px',
      textAlign: 'left',
    };

    const taskInput = {
      margin:'auto',
      paddingTop: '10px',
      backgroundColor: '#ffffffCC',
      color: '#02151d',
      border: '1px solid #ccc',
      lineHeight: '1.5em'
    };
    const removeTask = async (id) => {
      const updatedTasks = [...listState].filter((task) => task._id !== id);
      try {
        const deletedTask = await deleteTask({
          variables: { deleteTaskId:id },
          context: authContext,
        });
        console.log(deletedTask);
      } catch (error) {
        
      }
      setListState(updatedTasks);
    };
    const addTask = (task)=>{
      const newTaskList = [...listState,task];
      setListState(newTaskList);
    }

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const task = await createTask({
        variables: { taskname:formState.taskname, location: formState.location },
        context: authContext,
      });

      //setFormState({...formState,taskname:'',location:''});
      setListState([...listState,task.data.createTask]);
     
    } catch (e) {
      console.log(e);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  
  if (loading) {
    return (
      <div className="Tasks" style={tasksStyle}>
        <div className="header">
          <form>
            <label htmlFor="taskname">Email address:</label>
            <input placeholder="enter task" id="taskname" type="taskname" name="taskname" onChange={handleChange} ></input>
            <input style={inputBox} placeholder="enter location" onChange={handleChange} id="location" name="location"></input>
            <button style={submitButtonStyles} type="submit" onClick={handleFormSubmit}>
              add
            </button>
          </form>
        </div>
        <div className="content">Loading...</div>
      </div>
    );
  } else{

    // try {
    // return(
    //  <>
    //  <TaskForm onSubmit={addTask} />
    //  <TaskList results={listState} removeTask={removeTask} />
    //  </>);
    // } catch (error) {
      
    // }

    try {
      // const { getAllTasks } = data;
      // setFormState({...formState,tasks:{getAllTasks},});
    
      return (
        <div className="Tasks" style={tasksStyle}>
          <div className="header">
            <form>
              <input style={inputBox} placeholder="enter task" onChange={handleChange} name="taskname"></input>
              <input style={inputBox} placeholder="enter location" onChange={handleChange} name="location"></input>
              <button style={submitButtonStyles} onClick={handleFormSubmit}>
                add
              </button>
            </form>
          </div>
          <div className="content" style={taskInput}>
          <ul style={{ listStyle:'none', paddingInlineStart:'0'}}
        >
            <TaskList results={listState} removeTask={removeTask} />
            </ul>
          </div>
        </div>
      );
    } catch (error) {
      return(<>
      Loading Error...</>)
    }
   
  }
 
};


export default Tasks;


