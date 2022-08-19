import React, { useState } from "react";
import { BsCloudMinusFill, BsCloudPlusFill } from 'react-icons/bs';


function SelectQuantity() {
    let [quantity, setQuantity] = useState(0);

    let decrement = () => setQuantity(quantity === 0 ? 0 : quantity - 1);
    let increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1);

    return (
        <div>
            <BsCloudMinusFill onClick={decrement} class="pointer" />
            <span class="qv">{quantity}</span>
            <BsCloudPlusFill onClick={increment} class="pointer" />
        </div>
    );
}
export default SelectQuantity;