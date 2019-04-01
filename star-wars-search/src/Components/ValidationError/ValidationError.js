import React from 'react';
import "./ValidationError.css";
export default function ValidationError(props) {
  if(props.hasError) {
      if(props.message){
        return (
            <div className="error"><h3><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {props.message}</h3></div>
          );
      }
    
  }

  return <></>;
}