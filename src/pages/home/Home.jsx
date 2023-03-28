import React from 'react'
import AddProduct from '../../components/local/AddProduct'
import CustomerInfo from '../../components/local/CustomerInfo'
import DetailelFilled from '../../components/local/DetailelFilled'
import Navbar from '../../components/local/Navbar'
import PaymentMethod from '../../components/local/PaymentMethod'
import SelectedProducts from '../../components/local/SelectedProducts'

const Home = () => {
  return (
    <div>
      <Navbar />


      <div className='container shadow-lg p-3 mt-3'>
        <AddProduct />
        {/* <div className='mt-4'>
          <hr />
          <SelectedProducts />
        </div> */}

        <div className='mt-4'>
          <CustomerInfo />
        </div>
        <hr />
        <PaymentMethod />
        <hr />
        <div className='mt-4'>
          <DetailelFilled />
        </div>
      </div>
    </div>
  )
}

export default Home