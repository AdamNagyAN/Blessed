import React, { useState, useEffect } from 'react'
import Product from './Product'
import { Container } from '../styles'
import Loader from '../Loader'
import { db } from '../../lib/Config'

const Shop = () => {
    const [list, setList] = useState(null);
    // const [categories, setCategories] = useState(null)

    const fetchProducts = async (limit) => {
        await db.collection("products").limit(limit).onSnapshot(snapshop => {
            setList(
                snapshop.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            )
        })
    }


    useEffect(() => {
        fetchProducts(10);
    }, [])

    return (
        <Container className='container'>
            <div className="products" style={{ position: 'relative' }}>
                {list ? list.map((item) => (
                    <Product key={item.id} item={item} />
                )) : (<Loader />)}
            </div>
        </Container>
    )
}


export default Shop
