import React from "react";
import {useQuery} from '@apollo/client';
import { QUERY_ALL_TASKS } from "../../utils/queries";
import Tasks from "../Tasks";
import TaskList from "../TaskList";

const TaskDash = () => {
  const { loading, err, data } = useQuery(QUERY_ALL_TASKS);

  const footerStyles = {
    color: "#DDB047 !important",
  };
  if (loading) {
    return (
      <>      
        <Tasks />
        <div>Loading Task List...</div>
      </>
    );
  } else {
    try {
      const { getAllTasks } = data;
      return (
        <>
          <Tasks />
          <TaskList results={getAllTasks} />
          
        </>
      );
    } catch (err) {
      return <>Loading Error...</>;
    }
  }
};

export default TaskDash;
