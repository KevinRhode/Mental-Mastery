import React, { Component } from "react";
import Auth from "../utils/auth";
import TaskList from "./TaskList";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CREATE_TASK } from "../utils/mutations";
import { QUERY_ALL_TASKS } from "../utils/queries";
import cardBackgroundImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';

const Tasks = () => {
  const [formState, setFormState] = useState({ taskname: "", location: "" });
  const { loading, err, data } = useQuery(QUERY_ALL_TASKS);
  const [createTask, { error }] = useMutation(CREATE_TASK);
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  const tasksStyle = {
      backgroundImage: `url(${cardBackgroundImage})`,
      padding: '20px',
      boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3)',
      color: 'white',
      fontWeight: '800',
      textShadow: '0 0 10px rgba(0, 0, 100, 0.5)',
      zIndex: 1,
    };

    const submitButtonStyles = {
      marginTop: '10px',
      padding: '5px 10px',
      backgroundColor: '#1b5060',
      color: 'white',
    };

    const inputBox = {
      width: '650px',
      padding: '5px',
      margin: '5px',
      textAlign: 'left',
    };

  const authContext = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const task = await createTask({
        variables: { taskname: "Test", location: "Location" },
        context: authContext,
      });
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
            <input style={inputBox} placeholder="enter task" onChange={handleChange}></input>
            <button style={submitButtonStyles} type="submit" onClick={handleFormSubmit}>
              add
            </button>
          </form>
        </div>
        <div className="content">Loading...</div>
      </div>
    );
  } else{
    try {
      const { getAllTasks } = data;
      return (
        <div className="Tasks" style={tasksStyle}>
          <div className="header">
            <form>
              <input style={inputBox} placeholder="enter task" onChange={handleChange}></input>
              <button style={submitButtonStyles} type="submit" onClick={handleFormSubmit}>
                add
              </button>
            </form>
          </div>
          <div className="content">
            <TaskList results={getAllTasks} />
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
