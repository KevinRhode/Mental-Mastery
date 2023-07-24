import React,{ useState }  from 'react';

  
function TaskList(props) {
   
    return (
        // <ul style={{ listStyle:'none'}}
        // className="list-group">
          
          
            props.results.map((result) => (
                <li key={result._id}>
                    {/* {result._id}. */}
                    {result.taskname}, {result.location}, {result.date} 
                </li>

            ))
       
        
    );
}

export default TaskList;