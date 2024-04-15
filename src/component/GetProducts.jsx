import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const GetProducts = () => {
    const [data, setData] = useState([])
    console.log(data, "8")
    useEffect(()=>{
        axios.get('http://localhost:3001/get-products')
        .then((res)=>setData(res.data.data))
        .catch((err)=>console.log(err))

    },[])

  return (
    <div>
       Products:{data && data.length>0 && data.map((item, index)=>{
        return(
          <div>
            {item.name}
          </div>
        )

       })}
    </div>
  )
}

export default GetProducts