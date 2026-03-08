import React from 'react'
import BaliKhtaItems from './BaliKhataIItems'

function BaliKhataList({baliFoot, onDelete, kiaApnaLakriHai}) {
  if(baliFoot.lengtd === 0){
    return <p className='no-expense'>No baliFoot yet</p>
  }
  return (
   <table className="expense-list">
    <thead>
    <tr className='expense-item item-top' >
        <td>لمبائی</td>
        <td>چوڑائی </td>
        <td> فٹ  </td>
        <td> قیمت</td>
    </tr>
    </thead>
    <tbody>
    {
      baliFoot.map(item => (
        <BaliKhtaItems key={item.id} item={item} onDelete={onDelete} baliFoot={baliFoot} kiaApnaLakriHai={kiaApnaLakriHai} />
      ))
    }
    </tbody>
       </table>

  )
}

export default BaliKhataList
