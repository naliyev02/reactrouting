import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/categories").then(res => {
            setData(res.data)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ?
                            <tr>
                                <td>
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </td>
                            </tr>
                            :
                            data.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{product.id}</th>
                                        <td>{product.name}</td>
                                        <td><Link to={`/products/${product.id}`}>Go Detail</Link></td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Products