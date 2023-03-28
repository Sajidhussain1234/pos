import React, { useState } from 'react'

const AddProduct = () => {
    const [selectedItem, setSelectedItem] = useState({});
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("")
    const [item, setItem] = useState({});


    const [orderItems, setOrderItems] = useState([
        // {
        //     id: 1,
        //     name: "Safeguard Soap",
        //     price: 80
        // },
        // {
        //     id: 2,
        //     name: " Lux Soap",
        //     price: 100
        // }
    ]);
 
    const products = [
        {
            id: 1,
            name: "Safeguard Soap",
            price: 80

        },
        {
            id: 2,
            name: " Lux Soap",
            price: 100
        },
        {
            id: 3,
            name: "Palmolive Soap",
            price: 90
        },
        {
            id: 4,
            name: "Dove Soap",
            price: 120
        },
        {
            id: 5,
            name: "Dettol Soap",
            price: 85
        }
    ];

    const handleChange = (e) => {
        const id = parseInt(e.target.value);
        // console.log(id)
        const product = products.find((prod) => prod.id === id)
        setSelectedItem(product)
        // console.log(product)
        setPrice(product.price)
        // setItem({...product, quantity: 1})
        setItem(product)
        // console.log(item)

    }


    const onAddClick = () => {

        if (qty === "") { setQty(1) } // if user does not enter any value in quintity item field then default value 1 is setting. 

        const copyItem = { ...item, quantity: qty };

        const copyOrderItems = [...orderItems];
        copyOrderItems.push(copyItem);
        setOrderItems(copyOrderItems); // orderItems is not updated on the spot which cause a problem
        // console.log(orderItems)  

        setSelectedItem({})
        setPrice("")
        setQty("")

    }

    const handleClear = () => {
        setSelectedItem({})
        setPrice("")
        setQty("")
    }

    const onDeleteItem = (id) => {
        const filterArr = orderItems.filter((item) => item.id !== parseInt(id))
        setOrderItems(filterArr);
    }

    return (
        <div>
            <div className='bg-info rounded-2 d-flex my-2 h-800' >
                <div className="input-group my-1 mx-1">
                    <label className="input-group-text" htmlFor="inputGroupSelect01"> <strong>Choose Product</strong></label>
                    <select className="form-select " value={selectedItem.id || ""} onChange={handleChange}>  {/* is value ka mtlb h kon sa option selected h. value must point to that option which is selected.  In selected tag value attribute refere to the option value which is selectd. Mtlb kon sa option selected h. First time b value deny k liye use hota h.  */}
                        <option value=""></option>
                        {products.map((product) => <option value={product.id} key={product.id}>{product.name}</option>)}
                    </select>
                </div>
                <input className='my-1 mx-1 rounded-3 text-center' type="number" placeholder='product quantity' value={qty} onChange={(e) => setQty(parseInt(e.target.value))} ></input>
                <input className='my-1 mx-1 rounded-3 text-center' type="number" placeholder='unit-price' defaultValue={price} readOnly></input>
                <button
                    className='btn btn-success my-1 mx-1 rounded-2'
                    disabled={(!qty)}
                    onClick={onAddClick}>Add Item
                </button>

                <button className='btn btn-secondary  my-1 mx-1 rounded-2' disabled={(!price)} onClick={handleClear}>Clear</button>
            </div>
            <hr />

            <div className="table-responsive text-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" disabled></input></th>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderItems?.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td ><input type="checkbox"></input></td>
                                    <td >{index + 1}</td>
                                    <td >{item.name}</td>
                                    <td >{item.quantity}</td>
                                    <td >{item.price}</td>
                                    <td >{item.price * item.quantity}</td>
                                    <td ><button className='btn btn-danger' onClick={() => { onDeleteItem(item.id) }} >Delete </button></td>
                                </tr>
                            )
                        })}

                        <tr>
                            <td colSpan="3"><strong className=''>Grand Total </strong></td>
                            <td colSpan="4"><strong>Rs. {orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</strong></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AddProduct