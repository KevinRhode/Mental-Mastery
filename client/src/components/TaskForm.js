import React, { useState } from 'react';

const TaskForm = (props)=> {

const [input, setInput] = useState({taskname:'',location:''});


 const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({      
      task: input.taskname,
      location: input.location,
    });

    setInput({...input,taskname:'',location:''});
  };

 const handleChange = (e) => {
    setInput(e.target.value);
  };

    return(<div className="Tasks" >
          <div className="header">
            <form onSubmit={handleSubmit}>
              <input placeholder="enter task" onChange={handleChange} name="taskname"></input>
              <input placeholder="enter location" onChange={handleChange} name="location"></input>
              <button >
                add
              </button>
            </form>
          </div>
          {/* <div className="content" style={taskInput}> */}
          {/* <ul style={{ listStyle:'none', paddingInlineStart:'0'}}
        >
            <TaskList results={listState} removeTask={removeTask} />
            </ul> */}
          {/* </div> */}
        </div>);
}

export default TaskForm;




