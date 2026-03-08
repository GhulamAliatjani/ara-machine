import React, { useRef, useState } from 'react'

function BaliKhataForm({onAddExpense, prices, setPrices, p}) {
  const [height, setheight]= useState();
  const [width, setwidth]= useState();

  const heightRef = useRef()
 
  const handleSubmit = (e)=>{
      e.preventDefault();
      if(!height || !width) return alert("Please fill all fields !")
        const widthi = parseFloat(width)
        const heighti = parseFloat(height)
      const totalFot = (heighti * widthi * widthi / 2304);
      const totalFt =   parseFloat(totalFot);
      const totalPrice= totalFt * p; //546.88
      const totalPriceApnaLakri = ((totalFt)*1600);
     const price = totalFt * 200; 
    setPrices([...prices, price]);
    const newArguments = {
        id: Date.now(),
        height: parseFloat(height),
        width: parseFloat(width),
        totalFt: parseFloat(totalFt.toFixed(4)),
        totalPrice: parseFloat(totalPrice.toFixed()),
        totalPriceApnaLakri: parseFloat(totalPriceApnaLakri.toFixed()),
        price: parseFloat(price)
      }
      onAddExpense(newArguments)
      setheight("");
      setwidth("")
      heightRef.current.focus();
    }
  return (
          <form className="expense-form" onSubmit={handleSubmit}>
             <input type="number" placeholder=" لمبائی  لکھیں " ref={heightRef} value={height} onChange={(e)=> setheight(e.target.value)} />
             <input type="number" placeholder="چوڑائی لکھیں " value={width} onChange={(e)=> setwidth(e.target.value)} />
             <button type='submit'>ہوگیا</button>
          </form> 
  )
}

export default BaliKhataForm
