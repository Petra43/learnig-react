import React from "react";
import TextInput from "../common/TextInput";
import { CardInputs } from "../../constants/StringConstants";
import { UnitCard } from "../../Types/UnitCard";
import MultiSelect from "../common/MultiSelectInput";
import NumberInput from "../common/NumberInput";

export default function CrusadeCard(props: {
  card: UnitCard;
  onCardChange: any;
}) {
  // let isEdit: boolean = false; // will make isEdit disable fields in readonly mode
  let card: UnitCard = props.card;

  return (
    <div className="crusade-card">
      <h3>Card Details</h3>
      <form className="container flex-column">
        {
          // section 1
        }
        <TextInput 
          cardInput={CardInputs.unitName}
          value={card.unitName} 
          onChange={props.onCardChange} />
        <TextInput 
          cardInput={CardInputs.battlefieldRole}
          value={card.battlefieldRole} 
          onChange={props.onCardChange} />
        <TextInput 
          cardInput={CardInputs.faction}
          value={card.crusadeFaction} 
          onChange={props.onCardChange} />
        <MultiSelect 
          cardInput={CardInputs.keywords} />
        {
          // section 2
        }
        <NumberInput 
          cardInput={CardInputs.powerRating} 
          value={card.powerRating}
          onChange={props.onCardChange} />
        <NumberInput 
          cardInput={CardInputs.experience}
          value={card.exp}
          onChange={props.onCardChange} />
        <NumberInput 
          cardInput={CardInputs.crusadePoints}
          value={card.crusadePoints}
          onChange={props.onCardChange} />
        {
          // section 3
        }
        <TextInput 
          cardInput={CardInputs.unitType}
          value={card.unitType}
          onChange={props.onCardChange} />
        <MultiSelect 
          cardInput={CardInputs.equipment} />
        <MultiSelect 
          cardInput={CardInputs.psychicPowers} />
        <MultiSelect 
          cardInput={CardInputs.warlordTraits} />
        <MultiSelect 
          cardInput={CardInputs.relics} />
        {
          // section 4
        }
        <NumberInput 
          cardInput={CardInputs.battlesPlayed} 
          value={card.battlesPlayed}
          onChange={props.onCardChange} />
        <NumberInput
          cardInput={CardInputs.battlesSurvived}
          value={card.battlesSurvived}
          onChange={props.onCardChange} />
        <NumberInput 
          cardInput={CardInputs.unitsDestroyed}
          value={card.enemyUnitsDestroyed}
          onChange={props.onCardChange} />
        <NumberInput 
          cardInput={CardInputs.unitDestroyedWithPsychicPowers}
          value={card.enemyUnitsDestroyedWithPsychicPowers}
          onChange={props.onCardChange} />
        <NumberInput 
          cardInput={CardInputs.unitDestroyedWithRangedWeapons}
          value={card.enemyUnitsDestroyedWithRangedWeapons}
          onChange={props.onCardChange} />
        <NumberInput
          cardInput={CardInputs.unitDestroyedWithMeleeWeapons}
          value={card.enemyUnitsDestroyedWithMeleeWeapons}
          onChange={props.onCardChange} />
        {
          // section 5
        }
        <MultiSelect 
          cardInput={CardInputs.rank} />
        <MultiSelect
          cardInput={CardInputs.battleHonours} />
        <MultiSelect
          cardInput={CardInputs.battleScars} />
      </form>
    </div>
  )
}

