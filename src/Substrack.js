import React, { useState } from "react";



const Substract = (props) => {
    
    const [substract , setSubstract] = useState(0);

    const handleOnClick = () => {
        setSubstract(substract -1)
    }

        return (
        <div>
            <button onClick={handleOnClick}>Odejmij</button>
            <p>{substract}</p>


        </div>
      );
}
 
export default Substract;