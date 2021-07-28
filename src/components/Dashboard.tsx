import React, { useState } from "react";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import { OrderOfBattleDef } from "../Types/OrderOfBattleDef";
import TextInput from "./common/TextInput";

export default function Dashboard() {
  
  const [showAddForm, setShowAddForm] = useState(false)
  const { data: user} = useUser();
  const [orders, setOrders] = useState<OrderOfBattleDef[]>([]) 
  const [newOrder, setNewOrder] = useState('')
  const cartInput = {ref: 'test',label: 'Order Name'}

  // firebase stuff
  const ordersCollection = useFirestore()
    .collection('ordersOfBattle')

  const fireOrders = useFirestoreCollectionData(ordersCollection)

  const getOrders = () => {
    return fireOrders
  }

  

  const addOrder = (orderName: string) => {
    ordersCollection.doc(orderName).set({owner: user.uid})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line
    setNewOrder(e.target.value)
  }

  console.log(getOrders())

  return (
    <div>
      <h2> Dashboard</h2>
      <div>
        <div>
          <h3>Orders of Battle</h3>
          <button onClick={() => setShowAddForm(!showAddForm)}>Add Order</button>
          {showAddForm && 
            <div>
              <TextInput cardInput={cartInput} value={newOrder} onChange={handleChange}/>
              <button onClick={() => addOrder(newOrder)} >add</button>
            </div>
            }
        </div>
        <ul>
          { orders.map( (order) => {
            return <li>{order.name}</li>
          })}
        </ul>
      </div>
      
    </div>
  );
}