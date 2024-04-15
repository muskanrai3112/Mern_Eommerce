import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate()
  const [image, setImage]=useState('')
  const [name, setName]=useState('')
  const [category, setCategory]=useState('')
  const [seller, setSeller]=useState('')
  const [price, setPrice]=useState('')

  const handleOnsubmit=(event)=>{
    event.preventDefault()
    console.log({image:image, name:name, category:category, seller:seller, price:price   })
    const data = {url:image, name:name, category:category, seller:seller, price:price}
    axios.post('http://localhost:3001/add-product', data)
    .then((res)=>{console.log(res)
    if(res.data == 'saved'){
      navigate('/get/products')
    }})
    .catch((err)=>{console.log(err)})
  }
  return (
    
    <div>
      <form onSubmit={handleOnsubmit}>
        Image: <input className='inputs'  text="text" value={image}  onChange={(e)=>setImage(e.target.value)}/><br/><br/>
        Name:<input className='inputs' text="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
        category: <input className='inputs' text="text" value={category} onChange={(e)=>setCategory(e.target.value)}/><br/><br/>
        seller:<input className='inputs' text="text" value={seller} onChange={(e)=>setSeller(e.target.value)}/><br/><br/>
        price: <input className='inputs' text="number" value={price} onChange={(e)=>setPrice(e.target.value)} /><br/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProduct