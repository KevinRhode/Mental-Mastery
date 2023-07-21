import React,{ useState }  from 'react';

  
function TaskList(props) {
   
    return (
        // <ul style={{ listStyle:'none'}}
        // className="list-group">
          <>
          
            {props.results.map((result) => (
                <li className="list-group-item"
                key={result.id}>
                    {/* {result._id}. */}
                    {result.taskname},
                    {result.location},
                    {result.date}
                </li>

            ))}
        {/* </ul> */}
        </>  
    );
}

export default TaskList;