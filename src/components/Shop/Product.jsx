import React, {useState} from 'react'
import './shop.scss'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import ImageWithSkeleton from "../atoms/ImageWithSkeleton";

const Product = ({ item }) => {
    const { id, Name, Price, CoverImg } = item;
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    const handleProductClick = () => {
        history.push(`/shop/${id}`);
    }

    // history.push(`/shop/${id}`)
    return (
        <div className="product-card-container" onClick={() => handleProductClick()}>
            <div className="product-card-img-container">
                {loaded ? null : (
                    <div
                        style={{
                            "width": "100%",
                            "objectFit": "cover",
                            "background": "rgb(139,139,139)",
                        }}
                    />
                )}
                <ImageWithSkeleton aspectRatio="4 / 5" onClick={() => handleProductClick()} src={CoverImg} style={loaded ? {} : { display: 'none' }} className="product-card-img" alt="Product" onLoad={() => setLoaded(true)}></ImageWithSkeleton>
            </div>
            <div className="product-card-info">
                <span className="name">{Name}</span>
                <span className="price">{`₴${Price}`}</span>
            </div>
        </div>
    )
}

export default connect(null)(Product)
