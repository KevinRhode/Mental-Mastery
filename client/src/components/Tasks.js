import React, { Component } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../utils/mutations";

const Tasks = () => {
    const [createTask, { error }] = useMutation(CREATE_TASK);
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const authContext = {
        headers:{Authorization: `Bearer ${token}`}
      };
    const handleFormSubmit = async (event) => {
        event.preventDefault();

    }
    
    return (
        <div className="Tasks">
            <div className="header">
                <form>
                    <input placeholder="enter task"></input>
                    <button type="submit">add</button>
                </form>
            </div>
        </div>
    );
}

export default Tasks;