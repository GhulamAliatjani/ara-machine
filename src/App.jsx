import { useEffect, useRef, useState } from "react";
import "./App.css";
import BaliKhataForm from "./BaliKhataForm.jsx";
import BaliKhataList from "./BaliKhataList.jsx";

function App() {
  const [kiaApnaLakriHai, setKiaApnaLakriHai] = useState(false);
  const [p2, setP2] = useState(200);
  const setKatai = (e) => {
    e.preventDefault();
  };
  // const p2 = p1;
  const [baliFoot, setbaliFoot] = useState(() => {
    const saved = localStorage.getItem("baliFoot");
    return saved ? JSON.parse(saved) : [];
  });
  const [prices, setPrices] = useState([]);

  const addExpense = (nayibali) => {
    setbaliFoot((prev) => [...prev, nayibali]);
  };
  const deleteHandle = (id) => {
    setbaliFoot((prev) => prev.filter((item) => item.id != id));
  };
  const totalBaliAdat = baliFoot.length;
  const [check, setCheck] = useState(true);
  const testRef = useRef();
  const [isClass, setIsClass] = useState(true);
  const controlstyle1 = () => {
    setCheck(check==true?false: true)
    
    if (check == true) {
      testRef.current.classList.toggle('detail-for-shopkeeper2')
      setIsClass(testRef.current.classList.contains('detail-for-shopkeeper2')? true: false)
      // testRef.current.classList.remove('detail-for-shopkeeper0')
    }
    else {
      // testRef.current.classList.toggle('detail-for-shopkeeper2')
      // testRef.current.classList.remove('detail-for-shopkeeper0')

      // testRef.current.style.height = "50px";
      // testRef.current.style.opacity = "1";
      // testRef.classList.toggle('detail-for-shopkeeper1')

    }
    // const totl_foot = golai* golai*labai / 144 
  };
  const contorl1Ref = useRef()
  const controlStyle2 = ()=>{
    // console.clear()
    contorl1Ref.current.classList.toggle('bndKro1');
    setIspen(!isopen);

  }

  useEffect(() => {
    localStorage.setItem("baliFoot", JSON.stringify(baliFoot));
  }, [baliFoot]);

  const totalbaliFoot = baliFoot.reduce((sum, item) => sum + item.price, 0);
  const totalFullPrice = baliFoot.reduce(
    (sum, item) => sum + item.totalPriceApnaLakri,
    0,
  );
  const [isopen, setIspen] = useState(false)
  const totalFood = baliFoot.reduce((sum, item) => sum + item.totalFt, 0);
  const QimatKhareed = totalFood * 1150;
  const bejnaQimatPre = totalFood * 1400;
  const bejnaQimatPost = totalFood * 1600;
  // const munafa = bejnaQimatPre - QimatKhareed;
  const munafa1 = bejnaQimatPost - QimatKhareed;
  return (
    <div className="app-container" >
      <div className="CopanyName">خپلو آرا مشین & کارپینٹر شاپ ABC</div>
      <div className="topContainer">
        <div className="customerName">
        <input type="text" />
       <span> :بنام</span>
        </div>
      <h1 style={{ textAlign: "center" }}> <span className="firstBtn firstBtn1" onClick={controlstyle1} > {isClass? '🔶': '🔷'} </span>  <span> چیرائی کی تفصیلات </span>  <span className="firstBtn firstBtn2" onClick={controlStyle2}> {isopen== true? '🔶': '🔷'}</span> </h1></div>
      <div className="SecoundRow" ref={contorl1Ref}>
        <form action="" onSubmit={setKatai}>
          <input
            type="number"
            placeholder=" قیمت فی چیڑائی "
            onChange={(e) => setP2(e.target.value)}
          />
        </form>
        <label htmlFor="">
          <span className="question1">
            <span>
             کیا اپنا لکڑی ھے؟ </span>
          </span>
          <div className="choose">
          <input
            type="radio"
            name="apna"
            id=""
            onChange={() => {
              setKiaApnaLakriHai(true);
            }}
          />
          جی
          <input
            type="radio"
            name="apna"
            id=""
            onChange={() => {
              setKiaApnaLakriHai(false);
            }}
          />
          نھی
          </div>
        </label>
      </div>
      <BaliKhataForm
        onAddExpense={addExpense}
        prices={prices}
        setPrices={setPrices}
        p={p2}
      />
      <div className="detail-for-shopkeeper1 " ref={testRef}>
        <h4>
          {" "}
          کل خریداری قیمت <br />
          {parseFloat(QimatKhareed.toFixed(1))}
        </h4>
        <h4>
          {" "}
          کل بغیر چیڑائی <br /> {parseFloat(bejnaQimatPre.toFixed(1))}
        </h4>
        <h4>
          {" "}
          کل چیڑائی کے ساتھ <br />
          {parseFloat(bejnaQimatPost.toFixed(1))}
        </h4>
        <h4>
          {" "}
           کل منافع <br /> {parseFloat(munafa1.toFixed(4))}
        </h4>
      </div>
      <BaliKhataList kiaApnaLakriHai={kiaApnaLakriHai} baliFoot={baliFoot} onDelete={deleteHandle} />
      <div className="total-price">
        <div className="totalExpese totalExpese1">
           <h3 onClick={controlstyle1} >
            {totalBaliAdat.toFixed()} عداد
          </h3>
        </div>
        <div className="totalExpese totalExpese1">
          <h3 onClick={() => setCheck(!check)} onDoubleClick={controlstyle1}>
            {totalFood.toFixed(2)} ٹوٹل فٹ{" "}
          </h3>
        </div>
        <div className={kiaApnaLakriHai == true ? "one totalExpense" : "two totalExpense"}>
          
          {/* <span onClick={() => setCheck(!check)}> */}
            
            <h3>  ٹوٹل قیمت {totalbaliFoot.toFixed()} </h3> 
          {/* </span> */}
        </div>
        <div className={kiaApnaLakriHai == true ? "two totalExpense" : "one totalExpense"}>
          
          {/* <span>  ٹوٹل قیمت Rs: */}
            <h3> ٹوٹل قیمت   {totalFullPrice.toFixed()} </h3>
            {/* </span> */}
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';

// function App() {
//   const [length, setLength] = useState('');
//   const [width, setWidth] = useState('');
//   const [items, setItems] = useState([]);
//   const [prices, setPrices] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const lengthNum = parseFloat(length);
//     const widthNum = parseFloat(width);
//     const totalFoot = (lengthNum * widthNum) / 304;
//     const price = totalFoot * 50; // مثال کے طور پر 50 روپے فی فٹ
//     setItems([...items, { length: lengthNum, width: widthNum, totalFoot, price }]);
//     setPrices([...prices, price]);
//     setLength('');
//     setWidth('');
//   };

//   const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);

//   return (
//     <div>
//       <h1>بلّی کیلکولیٹر</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           placeholder="لمبائی"
//           value={length}
//           onChange={(e) => setLength(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="چوڑائی"
//           value={width}
//           onChange={(e) => setWidth(e.target.value)}
//         />
//         <button type="submit">شامل کریں</button>
//       </form>
//       <h2>کل قیمت: {totalPrice.toFixed(2)} روپے</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             لمبائی: {item.length}، چوڑائی: {item.width}، کل فٹ: {item.totalFoot.toFixed(2)}، قیمت: {item.price.toFixed(2)} روپے
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
