// import {useState, useEffect} from 'react';
import BaliKhataList from './BaliKhataList';
function BaliKhtaItems({item, onDelete, kiaApnaLakriHai,  itemDel, deleteItem}) {
  return (
      <tr  onDrag={()=> onDelete(item.id)} className="expense-item">
            <td ref={itemDel} onTouchMoveCapture={() => deleteItem(item.id)} >{item.height}</td>
            <td> {item.width}</td>
            <td>{item.totalFt}</td>
            <td className={kiaApnaLakriHai == true ? "two  " : "one"}>{kiaApnaLakriHai == true ? item.totalPriceApnaLakri : item.totalPrice }</td>
            <td className={kiaApnaLakriHai == true ? "one " : "two"}>{kiaApnaLakriHai == true ? item.totalPriceApnaLakri : item.totalPrice }</td>
      </tr>
  )
}

export default BaliKhtaItems
