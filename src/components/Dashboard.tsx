import React, { useState } from "react";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import TextInput from "./common/TextInput";
import OdrerOfBattle from "./crusade/OrderOfBattle";

export default function Dashboard() {
  
  // states 
  const [showAddForm, setShowAddForm] = useState<boolean>(false)
    //const [orders, setOrders] = useState<OrderOfBattleDef[]>([])
  const [newOrder, setNewOrder] = useState<string>('')
  const [selectedOrder, setSelectedOrder] = useState<string>('')
  
  const { data: user} = useUser();
  const cartInput = {ref: 'test',label: 'Order Name'}
  
  // Load ordersOfBattle  // look into ways to do this outside of the component.
  const ordersCollection = useFirestore()
    .collection('ordersOfBattle');
  // ISSUE the where is not retrieving the relevant data
  const ordersQuery = ordersCollection.orderBy('owner', 'asc')//.where('owner', '==', user.uid )
  const {status, data: fireOrders} = useFirestoreCollectionData(ordersQuery, {idField: 'docID'})


  // add a new orderOfBattle
  const addOrder = (orderName: string) => {
    ordersCollection.add({
      owner: user.uid,
      name: orderName,
      crusadeCards: [],
    })
  }

  const deleteOrder = (orderId: string) => {
    ordersCollection.doc().delete()
  }

  const handleChange = (value: string) => {
    setNewOrder(value)
  }

  return (
    <div>
      { !selectedOrder &&
        <div>
          <h2> Dashboard</h2>
          <div>
            <div>
              <h3>Orders of Battle</h3>
              { !showAddForm && <button onClick={() => setShowAddForm(true)}>Add Order</button> }
              {showAddForm && 
                <div>
                  <TextInput cardInput={cartInput} value={newOrder} onChange={handleChange}/>
                  <button onClick={() => addOrder(newOrder)} >add</button>
                  <button onClick={() => setShowAddForm(false)}>cancel</button>
                </div>
                }
            </div>
            <ul>
              { status === 'loading' && <li>Loading orders...</li>}
              { fireOrders && fireOrders.map( (order) => {
                return (
                  <li 
                    key={order.docID as string} 
                    onClick={() => setSelectedOrder(order.docID as string)}>
                      {order.name as string}
                      <button onClick={() => deleteOrder(order.docID as string)}>delete</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      }
      { selectedOrder && 
      <>
        <button onClick={ () => setSelectedOrder('')}>Dashboard</button>
        <OdrerOfBattle orderId={selectedOrder} />
      </>}
      
    </div>
  );
}