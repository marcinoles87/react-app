import React, { useState }  from "react";

const Task = (props) => {

    const [counter , setCounter] = useState(0);

    const handleOnClick = () => {
       setCounter( counter+1)
    } 
    return ( 
        <div>

            <h1>Element funkcyjny</h1>
            <button onClick={handleOnClick}>Dodaj</button>
            <p> {counter}</p>
            <h1>{props.value} nnnn</h1>
        </div>
     );
}

 
export default Task;