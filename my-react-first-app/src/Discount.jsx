import { useState } from "react";

function Discount()
{
    const originalPrice=7899;
    const [price,setPrice]=useState(originalPrice);
    const [discount,setdiscount]=useState(0); 
    const applydiscount=(discountValue)=>{
        if(discountValue ===10){
            setdiscount(originalPrice * 0.1);           
        } else if (discountValue ===20){
            setdiscount(originalPrice * 0.2);
        }else if (discountValue ===30){
            setdiscount(originalPrice * 0.3);
        }else{
            setdiscount(price);
        }
    };
    return (
        <>
        <h1>Original Price:${originalPrice}</h1>
        <h2>Discounted Price:${discount.toFixed(2)}</h2>
        <p>Click a button to apply a discount:</p>
        <button onClick={()=> applydiscount(10)}>Apply 10% Discount</button>
        <button onClick={()=> applydiscount(20)}>Apply 20% Discount</button>
        <button onClick={()=> applydiscount(30)}>Apply 30% Discount</button>
        <button onClick={()=> applydiscount(0)}>Reset Price</button>
        </>
    )
}
export default Discount;