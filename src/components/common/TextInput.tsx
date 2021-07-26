import { CardInputText } from "../../Types/InputTypes";

export default function TextInput(props: CardInputText) {
  return (
    <div>
      <label>
        {props.cardInput.label}
        <input 
          type="text"
          name={props.cardInput.ref}
          value={props.value}
          onChange={(e) => props.onChange(e)}
          />
        </label>
    </div>
    
  )
}