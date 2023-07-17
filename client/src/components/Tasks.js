import React, { Component } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../utils/mutations";

const Tasks = () => {


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