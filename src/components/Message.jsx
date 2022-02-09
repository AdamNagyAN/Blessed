import React from 'react';
import styled from 'styled-components';
const Message = ({ msg }) => {
    return <MsgBox>
        {msg}
    </MsgBox>;
};

const MsgBox = styled.div`
    text-align: center;
    width: 100%;
    background: rgb(20,20,20);
    color: white;
`

export default Message;
