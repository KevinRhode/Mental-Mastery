import React,{ useState }  from 'react';


  
function TaskList(props) {
    const [formState, setFormState] = useState({ tasks:[]});
    // setFormState
    return (
        // <ul style={{ listStyle:'none'}}
        // className="list-group">
          
          
            props.results.map((result) => (
                <li key={result._id}>
                    {/* {result._id}. */}
                    {result.taskname}, {result.location}, {result.date} 
                    <p onClick={() => props.removeTask(result._id)}> 🗑️</p>
                </li>

            ))
       
        
    );
}

export default TaskList;