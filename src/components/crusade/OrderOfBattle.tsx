import React from "react";
import { UnitCard } from "../../objects/UnitCard";
import CrusadeCard from "./CrusadeCard";
import _ from 'lodash';

export default class OdrerOfBattle extends React.Component<{}, {
  cards: UnitCard[], 
  cardList: JSX.Element[],
  selectedCard: number;
}> {

  constructor(props: any) {
    super(props);    
    this.state = {
      cards: [],
      cardList: [],
      selectedCard: 0,
    }

    //bind functions
    this.updateSelectedCard = this.updateSelectedCard.bind(this)
  }

  async selectCard(e: React.MouseEvent, cardID: number) {
    e.preventDefault()
    await this.setState({selectedCard: cardID})
  }

  getCard(cardID: number): UnitCard{
    let unitCard: UnitCard = this.state.cards.find(card => card.id === cardID) || new UnitCard()

    return unitCard
  }

  componentDidMount() {
    this.renderUnitList();
  }

  renderUnitList() {
    this.setState({ cardList: this.state.cards.map((card) => {
      return (
        <li key={card.id} onClick={(e) => this.selectCard(e, card.id)} >{card.unitName}</li>
      )
    })})
  }

  /**
   * add an new unit card to the Cards state and make it the selected card
   * @param e React MouseEvent
   */
  async addUnit(e: React.MouseEvent) {
    e.preventDefault();

    let cardID: number = 0;

    while(cardID === 0 && !this.state.cards.some(card => card.id === cardID)) {
      cardID = this.generateID()
    }

    let newCard: UnitCard = new UnitCard();
    newCard.id = cardID;
    let cards = _.clone(this.state.cards);
    cards.push(newCard);
    await this.setState({cards: cards, selectedCard: cardID})
    this.renderUnitList()
  }

  /**
   * @returns a random number between 1 and 9990
   */
  generateID():number {
    const min:number = 1;
    const max:number = 9999;
    let num:number = Math.floor(Math.random() * (max - min) + min)
    return num;
  }

  /**
   * update the selected card with the change from the CrusadeCard component
   * @param e React ChangeEvent
   */
  async updateSelectedCard(e: React.ChangeEvent<HTMLInputElement>) {
    let updatedCard: UnitCard = _.cloneDeep(this.getCard(this.state.selectedCard));
    let newValue: string = e.target.value;
    let cards: UnitCard[] = _.clone(this.state.cards);
    let cardIndex = cards.findIndex(card => card.id === this.state.selectedCard);

    // update the changed attribute
    switch(e.target.name) {
      case 'unitName':
        updatedCard.unitName = newValue;
        break
      case 'unitType':
        updatedCard.unitType = newValue;
        break
    }    

    cards[cardIndex] = updatedCard;
    await this.setState({cards});
    this.renderUnitList();
  }

  render(){
    return (
      <section>
        <h2>Order Of Battle</h2>
        <div className="container flex">
          <div className="cardList">
            <h3>Crusade Cards</h3>
            <button onClick={(e) => this.addUnit(e)} >add new unit</button>
            <ul>
              {this.state.cardList}
            </ul>
          </div>
          <div className="selectedCard">
            {this.state.selectedCard !== 0 && 
              <CrusadeCard 
                key={this.state.selectedCard} 
                card={_.cloneDeep(this.getCard(this.state.selectedCard))} 
                onCardChange={this.updateSelectedCard} />
            }
          </div>
        </div>
      </section>
    )
  }
}