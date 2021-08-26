import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { commerce } from '../../lib/commerce';
import styled from 'styled-components';
import { Container } from '../styles'

import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import Loader from '../Loader'

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    

    useEffect(() => {

        commerce.products.retrieve(id).then((result) => setProduct(result));
        
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <DetailContainer>
            {!product && <Loader></Loader>}

            <Gallery>
                {product && <ProductImages assets={product.assets}/>}
            </Gallery>
            {product && <ProductInfo {...product} />}
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
