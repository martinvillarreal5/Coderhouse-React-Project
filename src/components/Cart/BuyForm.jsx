import { CartContext } from "../CartContext";
import { useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";

export default function BuyForm() {
    const { cart, cartTotal, clearCart } = useContext(CartContext);

    const saveOrder = () => {
        const order = {
            buyer: {
                name: "John Doe",
                email: "jdoe@nomail.com",
                phone: "555-555-5555",
            },
            items: cart.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    count: item.count,
                    price: item.price, //also/instead save total for item?
                }
            }),
            total: cartTotal(),
        };
        if (order.items.length > 0) {
            console.log(order);
            const db = getFirestore();
            const orderRef = collection(db, "orders");
            addDoc(orderRef, order)
                .then(({ id }) => {
                    console.log("order saved, order id: " + id);
                    clearCart()
                })
                .catch((err) => {
                    console.log("error saving order: " + err);
                });

        } else {
            console.log("No items in cart, probably a bug, order not saved");
        }
    }

    return (
        <button onClick={() => saveOrder()}>Buy</button>
    );
}