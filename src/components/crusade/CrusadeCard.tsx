import React from "react";
import TextInput from "../common/TextInput";
import { CardInputs } from "../../constants/StringConstants";
import { UnitCard } from "../../Types/UnitCard";
import MultiSelect from "../common/MultiSelectInput";
import NumberInput from "../common/NumberInput";
import { ranks } from "../../constants/listConstants";

/**
 * Component that manages the displaying and editing of crusade cards
 * @param props 
 * @returns JSX
 */
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
          cardInput={CardInputs.keywords}
          value={card.selectableKeyWords} 
          onChange={props.onCardChange} />
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
          cardInput={CardInputs.equipment} 
          value={card.equipment}
          onChange={props.onCardChange} />
        <MultiSelect 
          cardInput={CardInputs.psychicPowers} 
          value={card.psychicPowers}
          onChange={props.onCardChange} />
        <MultiSelect 
          cardInput={CardInputs.warlordTraits} 
          value={card.warlordTraits}
          onChange={props.onCardChange} />
        <MultiSelect 
          cardInput={CardInputs.relics} 
          value={card.relics}
          onChange={props.onCardChange} />
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
          cardInput={CardInputs.rank} 
          value={card.rank}
          onChange={props.onCardChange}
          whitelist={ranks} 
          mode="select"/>
        <MultiSelect
          cardInput={CardInputs.battleHonours} 
          value={card.battleHonours}
          onChange={props.onCardChange} />
        <MultiSelect
          cardInput={CardInputs.battleScars} 
          value={card.battleScars}
          onChange={props.onCardChange} />
      </form>
    </div>
  )
}

