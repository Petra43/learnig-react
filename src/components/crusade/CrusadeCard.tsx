import React from "react"

export default function CrusadeCard(props: any) {
  let isEdit: boolean = false; 
  let card = props.card;

  const handleChange = (e: React.ChangeEvent) => {
    props.onCardChange(e)
  }
  
  return (
    <div className="crusade-card">
      <h3>Card Details</h3>
      <form>
          <input 
            name="unitName"
            type="text" 
            value={card.unitName} 
            onChange={(e) => handleChange(e)} />
          <input 
            name="unitType"
            type="text" 
            value={card.unitType} 
            onChange={(e) => handleChange(e)} />
          <input 
            name="battlefieldRole"
            type="text" 
            value={card.battlefieldRole} 
            onChange={(e) => handleChange(e)} />
      </form>
    </div>
  )
}