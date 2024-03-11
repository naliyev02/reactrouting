import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/categories/${id}`).then(res => { setData(res.data) })
    }, [])
    return (
        <div>
            <p>Id : {data.id}</p>
            <p>Name : {data.name}</p>
            <p>Desciption : {data.description}</p>
        </div>
    )
}

export default ProductDetail