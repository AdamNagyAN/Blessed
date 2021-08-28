import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import { Container } from '../styles'

import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import Loader from '../Loader'
import { db } from '../../lib/Config';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    

    useEffect(() => {

        db.collection("products").doc(id).get().then((result) => setProduct(result.data()));
        
    },[]) 

    return (
        <DetailContainer>
            {!product && <Loader></Loader>}

            <Gallery>
                {product && <ProductImages assets={product.Images}/>}
            </Gallery>
            {product && <ProductInfo id={product.id} name={product.Name} price={product.Price} description={product.Description} />}
        </DetailContainer>
    )
}

const DetailContainer = styled(Container)`
    @media (max-width: 750px){
        flex-direction: column;
    }
`
const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 750px){
        width: 100%;
        margin: 0 auto;
    }
` 


export default Details
