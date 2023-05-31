import React from "react";

export default function Alert(props) {
    const capitalize= (word)=>{
        const typeOfMsg= word.toLowerCase();
        return typeOfMsg.charAt(0).toUpperCase() + typeOfMsg.slice(1);
        
    }
  return (
      <div style={{height:'50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type) }</strong>:{props.alert.msg}
      </div>
      }
      </div>
    
  )
}

