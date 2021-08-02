import React from "react";
import { CardInputText } from "../../Types/InputTypes";

export default function TextInput(props: CardInputText) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    props.onChange(value, props.cardInput.ref)
  }
  
  return (
    <div>
      <label>
        {props.cardInput.label}
        <input 
          type="text"
          name={props.cardInput.ref}
          value={props.value}
          onChange={(e) => handleChange(e)}
          />
      </label>
    </div>
    
  )
}