export default function MultiSelect(props: {
  cardInput: {
    ref: string;
    label: string;
  }
}) {
  return(
    <h4>Multi-select Placeholder for {props.cardInput.label}</h4>
  )
}