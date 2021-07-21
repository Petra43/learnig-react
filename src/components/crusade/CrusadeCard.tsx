import React from "react";

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
        <div>
          <div className="section-id">
            <input 
              name="unitName"
              type="text" 
              value={card.unitName} 
              onChange={(e) => handleChange(e)} />
            <input 
              name="battlefieldRole"
              type="text" 
              value={card.battlefieldRole} 
              onChange={(e) => handleChange(e)} />
            <input 
              name="faction"
              type="text"
              value={card.crusadeFaction}
              onChange={(e) => handleChange(e)}/>
          </div>

          <div className="section-points">
            <input 
              name="powerRating"
              type="number"
              value={card.powerRating}
              onChange={(e) => handleChange(e)}/>
            <input 
              name="exp"
              type="number"
              value={card.exp}
              onChange={(e) => handleChange(e)}/>
            <input 
              name="crusadePoints"
              type="number"
              value={card.crusadePoints}
              onChange={(e) => handleChange(e)}/>
          </div>
        </div>
        
        <div className="section-information">
          <input 
            name="unitType"
            type="text" 
            value={card.unitType} 
            onChange={(e) => handleChange(e)} />
        </div>

        <div className="section-tallies">

        </div>

        <div className="section-rank">

        </div>    
      </form>
    </div>
  )
}