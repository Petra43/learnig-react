import { CardInputNumber } from "../../Types/InputTypes";

export default function NumberInput(props: CardInputNumber) {
  return (
    <div>
      <label>
        {props.cardInput.label}
        <input 
          type="number"
          name={props.cardInput.ref}
          value={props.value}
          onChange={(e) => props.onChange(e)}
          />
      </label>
  </div>
  )
}