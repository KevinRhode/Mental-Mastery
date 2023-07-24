import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../components/ProfileIcon";
import Task from "../components/Tasks";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_ALL_TASKS } from "../utils/queries";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const { loading: taskloading, err, data:taskData } = useQuery(QUERY_ALL_TASKS);

  if (loading) {
    return <>Loading Information</>;
  }
  console.log(data);
  console.log(data.me.familyUsers);
  if (taskloading) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          {data.me.familyUsers.map((familyuser) => (
            <ProfileIcon key={familyuser._id} props={familyuser} />
          ))}
        </div>
        <div>
          Loading Task...
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        {data.me.familyUsers.map((familyuser) => (
          <ProfileIcon key={familyuser._id} props={familyuser} />
        ))}
      </div>
      <div>
        {taskData && (<Task tasks={taskData.getAllTasks} />)}
      </div>
    </div>
  );
};

export default Dashboard;
