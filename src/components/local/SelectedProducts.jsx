import React from 'react'

const SelectedProducts = (props) => {
  const {orderItems} = props; 
  return (

    <div className="table-responsive text-center">
      <table className="table">
        {/* <caption>List of users</caption> */}
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" disabled></input></th>
            <th scope="col">Sr.No</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orderItems?.map((item, index)=>{return (
            <tr key={item.id}>
            <td ><input type="checkbox"></input></td>
            <td >{index+1}</td>
            <td >Quantity</td>
            <td >{item.price}</td>
            <td >Total</td>
            <td ><button className='btn btn-danger'>Remove </button></td>
          </tr>
          )})}
          
          <tr>
            <td scope="col" colSpan="3"><strong className=''>Grand Total </strong></td>
            <td scope="col" colSpan="3"><strong>Rs. 1250 </strong></td>
          </tr>



        </tbody>
      </table>
    </div>   
  )
}

export default SelectedProducts