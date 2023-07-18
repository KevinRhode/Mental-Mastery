import React, { Component } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../utils/mutations";

const Tasks = () => {
    const [formState, setFormState] = useState({ taskname: '', location: '' });
    const [createTask, { error }] = useMutation(CREATE_TASK);
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const authContext = {
        headers:{Authorization: `Bearer ${token}`}
      };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await createTask({
              variables: {taskname:"Test",location:"Location"},
              context: authContext
            });
          } catch (e) {
            console.log(e);
          }
    };

    return (
        <div className="Tasks">
            <div className="header">
                <form>
                    <input placeholder="enter task" onClick={handleFormSubmit}></input>
                    <button type="submit">add</button>
                </form>
            </div>
        </div>
    );
}

export default Tasks;