import React, { useEffect, useState } from "react";
import { UnitCard } from "../../Types/UnitCard";
import CrusadeCard from "./CrusadeCard";
import _ from 'lodash';
import { CardInputs } from "../../constants/StringConstants";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { OrderOfBattleDef } from "../../Types/OrderOfBattleDef";

// this component was originally a class but i changed it to a function to use reactfire hooks

export default function OdrerOfBattle( props: {
  orderId: string;
}) { 

  // State
  const [cards, setCards] = useState<UnitCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<number>(0);

  // firebase
  const orderOfBattleRef = useFirestore()
    .collection('ordersOfBattle')
    .doc(props.orderId)
    // TODO: find out how types work with reactfire
  const {status, data: order} = useFirestoreDocData<any>(orderOfBattleRef)

  useEffect( () =>{ 
    if(order) {
      setCards(order.crusadeCards)
    }
  },[order]) // when order updates run effect

  // functions 

  const saveCards = () => {
    const newOrder: OrderOfBattleDef = _.clone(order);
    const cardsClone = _.clone(cards);
    newOrder.crusadeCards = cardsClone.map( (card) => _.toPlainObject(card))
    console.log(newOrder)
    orderOfBattleRef.set(newOrder)
  }

  /**
   * @param e MouseEvent
   * @param cardID the identifier for the card that was clicked on
   */
  const selectCard = (e: React.MouseEvent, cardID: number) => {
    e.preventDefault();
    setSelectedCard(cardID);
  };

  /**
   * @param cardID the identifier for the card that you want
   * @returns a UnitCard object that has an id matching the input
   */
  const getCard = (cardID: number): UnitCard => {
    return cards.find(card => card.id === cardID) || new UnitCard()
  }

  /**
   * add a new unit to the cards array
   * @param e MouseEvent
   */
  const addUnit = async(e: React.MouseEvent) => {
    e.preventDefault()
    let cardID: number = 0;

    // Make sure selected ID is unique
    if(cards){ // when a card exists
      while(cardID === 0 && !cards.some(card => card.id === cardID)) {
        cardID = generateID()
      }

    } else { // when there are no cards
      cardID = generateID()
    }
    
    let newCard: UnitCard = new UnitCard();
    newCard.id = cardID;
    let cardsClone = cards? _.clone(cards) : [];
    cardsClone.push(newCard);
    setCards(cardsClone);
  }
  
  /**
   * Generate a number for an id
   * @returns a random number under 999999
   */
  const generateID = ():number => {
    const min: number = 1;
    const max: number = 999999;
    return Math.floor(Math.random() * (max - min) + min)
  }

  /**
   * Updates the fields on the selected card 
   * @param e event triggered from HTMLInputElement
   */
  const updateSelectedCard = (changedValue: string, inputRef: string) => {
    let updatedCard: UnitCard = _.cloneDeep(getCard(selectedCard));
    let newValue: string = changedValue;
    let cardsClone: UnitCard[] = _.clone(cards);
    let cardIndex = cardsClone.findIndex(card => card.id === selectedCard);

    // update the changed attribute
    switch(inputRef) {
      // section: id
      case CardInputs.unitName.ref:
        updatedCard.unitName = newValue;
        break;
      case CardInputs.battlefieldRole.ref:
        updatedCard.battlefieldRole = newValue;
        break;
      case CardInputs.faction.ref: 
        updatedCard.crusadeFaction = newValue;
        break;
      case CardInputs.keywords.ref:
        updatedCard.selectableKeyWords = newValue;
        break;

      // section: points
      case CardInputs.powerRating.ref:
        updatedCard.powerRating = parseInt(newValue);
        break;
      case CardInputs.experience.ref:
        updatedCard.exp = parseInt(newValue);
        break;
      case CardInputs.crusadePoints.ref:
        updatedCard.crusadePoints = parseInt(newValue);
        break;

      // section: information
      case CardInputs.unitType.ref:
        updatedCard.unitType = newValue;
        break;
      case CardInputs.equipment.ref:
        updatedCard.equipment = newValue;
        break;
      case CardInputs.psychicPowers.ref: 
        updatedCard.psychicPowers = newValue;
        break;
      case CardInputs.warlordTraits.ref: 
        updatedCard.warlordTraits = newValue;
        break;
      case CardInputs.relics.ref: 
        updatedCard.relics = newValue;
        break;

      // section: tallies
      case CardInputs.battlesPlayed.ref:
        updatedCard.battlesPlayed = parseInt(newValue);
        break;
      case CardInputs.battlesSurvived.ref:
        updatedCard.battlesSurvived = parseInt(newValue);
        break;
      case CardInputs.unitsDestroyed.ref:
        updatedCard.enemyUnitsDestroyed = parseInt(newValue);
        break;
      case CardInputs.unitDestroyedWithPsychicPowers.ref:
        updatedCard.enemyUnitsDestroyedWithPsychicPowers= parseInt(newValue);
        break;
      case CardInputs.unitDestroyedWithRangedWeapons.ref:
        updatedCard.enemyUnitsDestroyedWithRangedWeapons = parseInt(newValue);
        break;
      case CardInputs.unitDestroyedWithMeleeWeapons.ref:
        updatedCard.enemyUnitsDestroyedWithMeleeWeapons= parseInt(newValue);
        break;

      //section: rank
      case CardInputs.rank.ref: 
        // TODO: make the bellow work in ts 
        //updatedCard.rank = newValue;
        break;
      case CardInputs.battleHonours.ref:
        updatedCard.battleHonours = newValue;
        break;
      case CardInputs.battleScars.ref:
        updatedCard.battleScars = newValue;
    }    

    cardsClone[cardIndex] = updatedCard;
    setCards(cardsClone);
  }

  /**
   * 
   * @param id the id of the card that you want to remove
   */
  const deleteCard = (id: number) => {
    let cardsClone = _.clone(cards);
    const index = cardsClone.findIndex( card => card.id === id )
    cardsClone.splice(index, 1)
    setCards(cardsClone);
  }

  return (
    <section>
      {order && <h2>{order.name}</h2>}
      <div className="container flex">
        <div className="card-list">
          <h3>Crusade Cards</h3>
          <button onClick={(e) => addUnit(e)} >add new unit</button>
          <ul>
            { cards && cards.map( card => {
                return (
                <li key={card.id}  >
                  <span onClick={(e) => selectCard(e, card.id)}>{card.powerRating}: {card.unitName} </span>
                  <button onClick={() => deleteCard(card.id)} >delete</button>
                </li> 
                )
            })}
          </ul>
          <button onClick={() => saveCards()} >Save changes</button>
        </div>
        <div className="selected-card">
          {selectedCard !== 0 && 
            <>
              <CrusadeCard 
                key={selectedCard} 
                card={_.cloneDeep(getCard(selectedCard))} 
                onCardChange={updateSelectedCard} />
            </>
          }
        </div>
      </div>
    </section>
  )
}