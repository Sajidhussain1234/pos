import React from 'react'

const CustomerInfo = () => {

  const onChange = ()=>{}; 

  return (
    <div>
      <h3 className='text-center'> Customer Detail</h3>
      <form className="row g-3 needs-validation" >
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">Customer ID</label>
          <input type="text" className="form-control" id="validationCustom01" value="1" required onChange={onChange}/>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="validationCustom02" value="Ali" required onChange={onChange} />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Phone Number</label>
          <div className="input-group has-validation">
            <input type="text" className="form-control" id="validationCustomUsername" value="03008844666" aria-describedby="inputGroupPrepend" required onChange={onChange}/>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary" type="button">Add Customer</button>
        </div>
      </form>



      {/*       
      <label className='' htmlFor="customer_id">Customer ID:</label> <input className='my-3 rounded-3' type="number" placeholder='Id'></input>
      <label className='' htmlFor="customer_name">Name:</label> <input className='my-1 rounded-3' type="text" placeholder='name'></input>
      <label className='' htmlFor="customer_name">Phone#:</label> <input className='my-1 rounded-3' type="text" placeholder='phone number'></input>
      <button className='btn btn-primary  mx-2 rounded-2' >New Customer</button> */}
    </div>
  )
}

export default CustomerInfo