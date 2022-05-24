import { useState } from "react";

const Card = (props)=>{
    const [state,setState] = useState(props.backgroundImage)
  
  const handleClick = ()=>{
    setState(props.cardImage)
    
  }

    return(
        <img onClick={handleClick} src={state} alt=""></img>
        
    )
}

export default Card;
