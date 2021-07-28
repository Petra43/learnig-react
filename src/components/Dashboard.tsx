import { useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { OrderOfBattleDef } from "../Types/OrderOfBattleDef";

export default function Dashboard() {
  
  const [showAddForm, setShowAddForm] = useState(false)
  const ordersCollection = useFirestore()
    .collection('ordersOfBattle')

  const getOrders = () => {
    ordersCollection.get()
  }

  const addOrder = (orderName: string, data: OrderOfBattleDef) => {
    ordersCollection.doc(orderName).set(data)
  }

  

  return (
    <div>
      <h2> Dashboard</h2>
      <div>
        <div>
          <h3>Orders of Battle</h3>
          <button onClick={() => setShowAddForm(!showAddForm)}>Add Order</button>
          {showAddForm && 
            <div>
              <h5>you can see me</h5>
            </div>}
        </div>
        <div>
        </div>
      </div>
      
    </div>
  );
}