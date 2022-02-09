import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFromCart, adjustQty } from '../../redux/Cart/cart-actions';
import Counter from '../Counter';

const Item = ({ item, removeItem, adjustItemQty }) => {
    return (<tr>
        <td style={{ "flex": "2" }}><img src={item.CoverImg} alt="Product"></img><Link to={`/shop/${item.id}`}>{item.Name}</Link></td>
        <td style={{ "flex": "1", "flexDirection": "column" }}><Counter counter={item.qty} inc={() => adjustItemQty(item.id, 1)} dec={() => adjustItemQty(item.id, -1)}></Counter><span onClick={() => removeItem(item)}>Remove</span></td>
        <td style={{ "flex": "1", "justifyContent": "flex-end" }}>{item.Price * item.qty}$</td></tr >);
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeFromCart(item)),
    adjustItemQty: (item, qty) => dispatch(adjustQty(item, qty))
})

export default connect(null, mapDispatchToProps)(Item);
